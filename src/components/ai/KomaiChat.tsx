'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Send, Minimize2, X, Bot, User, Copy, RefreshCw,
  Sparkles, Globe, Mic, MicOff, ThumbsUp, ThumbsDown, ChevronDown
} from 'lucide-react'
import { cn, formatRelativeDate } from '@/lib/utils'
import { KOMAI_CONFIG } from '@/lib/constants'
import { toast } from '@/components/ui/toast'

type Message = {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  isStreaming?: boolean
  feedback?: 'up' | 'down'
}

type KomaiChatProps = {
  onClose: () => void
  onMinimize: () => void
}

export function KomaiChat({ onClose, onMinimize }: KomaiChatProps) {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 'greeting',
      role: 'assistant',
      content: KOMAI_CONFIG.greeting,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [showSuggestions, setShowSuggestions] = React.useState(true)
  const [language, setLanguage] = React.useState('English')
  const [showLangMenu, setShowLangMenu] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const abortControllerRef = React.useRef<AbortController | null>(null)

  const scrollToBottom = React.useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  React.useEffect(() => { scrollToBottom() }, [messages, scrollToBottom])

  const sendMessage = React.useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setShowSuggestions(false)
    setIsLoading(true)

    const assistantId = `assistant-${Date.now()}`
    const assistantMessage: Message = {
      id: assistantId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isStreaming: true,
    }
    setMessages(prev => [...prev, assistantMessage])

    try {
      abortControllerRef.current = new AbortController()
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages.map(m => ({ role: m.role === 'system' ? 'user' : m.role, content: m.content })),
            { role: 'user', content: text.trim() },
          ],
          language,
        }),
        signal: abortControllerRef.current.signal,
      })

      if (!response.ok) throw new Error('Failed to get response')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No stream')

      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim()
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              if (parsed.delta?.text) {
                accumulated += parsed.delta.text
                setMessages(prev => prev.map(m =>
                  m.id === assistantId
                    ? { ...m, content: accumulated, isStreaming: true }
                    : m
                ))
              }
            } catch { /* non-JSON lines */ }
          }
        }
      }

      setMessages(prev => prev.map(m =>
        m.id === assistantId ? { ...m, isStreaming: false } : m
      ))
    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      setMessages(prev => prev.map(m =>
        m.id === assistantId
          ? { ...m, content: 'I apologize, I encountered an error. Please try again.', isStreaming: false }
          : m
      ))
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }, [messages, isLoading, language])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleSuggestion = (prompt: string) => sendMessage(prompt)

  const copyMessage = async (content: string) => {
    await navigator.clipboard.writeText(content)
    toast('Copied to clipboard', { icon: '📋' })
  }

  const handleFeedback = (messageId: string, feedback: 'up' | 'down') => {
    setMessages(prev => prev.map(m => m.id === messageId ? { ...m, feedback } : m))
  }

  const clearChat = () => {
    abortControllerRef.current?.abort()
    setMessages([{ id: 'greeting', role: 'assistant', content: KOMAI_CONFIG.greeting, timestamp: new Date() }])
    setShowSuggestions(true)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-brand-700 text-white">
        <div className="relative">
          <div className="size-9 rounded-xl bg-gold-500 flex items-center justify-center">
            <Sparkles className="size-5 text-forest-900" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 size-3 bg-emerald-400 rounded-full border-2 border-brand-700" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold">KOMAI</h2>
          <p className="text-[10px] text-brand-200 truncate">Knowledge · Opportunity · Mentorship · AI</p>
        </div>
        <div className="flex items-center gap-1">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-brand-200 hover:bg-brand-600 hover:text-white transition-colors"
              aria-label="Select language"
            >
              <Globe className="size-3.5" />
              {language.slice(0, 2)}
            </button>
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute right-0 top-full mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl z-10 py-1 min-w-[130px]"
                >
                  {KOMAI_CONFIG.languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setShowLangMenu(false) }}
                      className={cn(
                        'w-full text-left px-3 py-1.5 text-xs transition-colors',
                        language === lang
                          ? 'text-brand-700 font-semibold bg-brand-50'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      )}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={clearChat}
            className="p-1.5 rounded-lg text-brand-200 hover:bg-brand-600 hover:text-white transition-colors"
            aria-label="Clear chat"
            title="Clear conversation"
          >
            <RefreshCw className="size-3.5" />
          </button>
          <button
            onClick={onMinimize}
            className="p-1.5 rounded-lg text-brand-200 hover:bg-brand-600 hover:text-white transition-colors"
            aria-label="Minimize chat"
          >
            <Minimize2 className="size-3.5" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-brand-200 hover:bg-brand-600 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'flex gap-2.5',
                message.role === 'user' && 'flex-row-reverse'
              )}
            >
              {/* Avatar */}
              <div className={cn(
                'size-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5',
                message.role === 'assistant'
                  ? 'bg-brand-100 dark:bg-brand-900/40 text-brand-700'
                  : 'bg-gold-100 dark:bg-gold-900/30 text-gold-700'
              )}>
                {message.role === 'assistant'
                  ? <Bot className="size-4" />
                  : <User className="size-4" />
                }
              </div>

              {/* Bubble */}
              <div className={cn(
                'group max-w-[80%] space-y-1',
                message.role === 'user' && 'items-end flex flex-col'
              )}>
                <div className={cn(
                  'rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                  message.role === 'assistant'
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-tl-sm'
                    : 'bg-brand-700 text-white rounded-tr-sm'
                )}>
                  {message.content || (
                    <span className="flex items-center gap-1">
                      <span className="size-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="size-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="size-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  )}
                  {message.isStreaming && message.content && (
                    <span className="inline-block size-1 bg-brand-600 rounded-full ml-0.5 animate-pulse" />
                  )}
                </div>

                {/* Actions */}
                {message.role === 'assistant' && !message.isStreaming && message.content && (
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => copyMessage(message.content)}
                      className="p-1 rounded text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                      title="Copy"
                    >
                      <Copy className="size-3" />
                    </button>
                    <button
                      onClick={() => handleFeedback(message.id, 'up')}
                      className={cn(
                        'p-1 rounded transition-colors',
                        message.feedback === 'up'
                          ? 'text-emerald-600'
                          : 'text-neutral-400 hover:text-emerald-600'
                      )}
                      title="Helpful"
                    >
                      <ThumbsUp className="size-3" />
                    </button>
                    <button
                      onClick={() => handleFeedback(message.id, 'down')}
                      className={cn(
                        'p-1 rounded transition-colors',
                        message.feedback === 'down'
                          ? 'text-red-500'
                          : 'text-neutral-400 hover:text-red-500'
                      )}
                      title="Not helpful"
                    >
                      <ThumbsDown className="size-3" />
                    </button>
                    <span className="text-[10px] text-neutral-400 ml-1">
                      {formatRelativeDate(message.timestamp)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      <AnimatePresence>
        {showSuggestions && messages.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 pb-3"
          >
            <p className="text-xs text-neutral-500 mb-2">Suggested questions:</p>
            <div className="flex flex-col gap-1.5">
              {KOMAI_CONFIG.suggestedPrompts.slice(0, 4).map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestion(prompt)}
                  className="text-left text-xs px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-150"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask KOMAI anything..."
              className={cn(
                'w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900',
                'px-4 py-2.5 pr-10 text-sm text-neutral-900 dark:text-neutral-100',
                'placeholder:text-neutral-400 resize-none outline-none',
                'focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all'
              )}
              disabled={isLoading}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              autoComplete="off"
              aria-label="Message KOMAI"
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              'size-10 rounded-xl flex items-center justify-center transition-all',
              input.trim() && !isLoading
                ? 'bg-brand-700 text-white hover:bg-brand-600 shadow-sm'
                : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
            )}
            aria-label="Send message"
          >
            <Send className="size-4" />
          </button>
        </form>
        <p className="text-[10px] text-neutral-400 text-center mt-2">
          Powered by Anthropic Claude · The Ayotunde Oso Foundation
        </p>
      </div>
    </div>
  )
}
