import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export type UserRole = 'admin' | 'staff' | 'volunteer' | 'donor' | 'user'

export async function requireAuth(redirectUrl = '/sign-in') {
  const { userId } = await auth()
  if (!userId) redirect(redirectUrl)
  return userId
}

export async function requireRole(role: UserRole, redirectUrl = '/') {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const userRole = (user.publicMetadata?.role as UserRole) ?? 'user'
  const roleHierarchy: UserRole[] = ['user', 'donor', 'volunteer', 'staff', 'admin']
  const userLevel = roleHierarchy.indexOf(userRole)
  const requiredLevel = roleHierarchy.indexOf(role)

  if (userLevel < requiredLevel) redirect(redirectUrl)
  return user
}

export async function getAuthUser() {
  const { userId } = await auth()
  if (!userId) return null
  return currentUser()
}

export async function isAdmin() {
  const user = await currentUser()
  return (user?.publicMetadata?.role as UserRole) === 'admin'
}
