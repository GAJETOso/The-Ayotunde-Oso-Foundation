import { cn, formatCurrency, calculateImpact } from '@/lib/utils';

describe('cn (classnames helper)', () => {
  it('merges class strings', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('base', false && 'not-this', 'this')).toBe('base this');
  });

  it('deduplicates Tailwind classes correctly', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('handles undefined values', () => {
    expect(cn('base', undefined, 'other')).toBe('base other');
  });
});

describe('formatCurrency', () => {
  it('formats NGN amounts', () => {
    const result = formatCurrency(50000, 'NGN');
    expect(result).toContain('50');
  });

  it('formats USD amounts', () => {
    const result = formatCurrency(100, 'USD');
    expect(result).toContain('100');
  });

  it('handles zero', () => {
    const result = formatCurrency(0);
    expect(result).toBeTruthy();
  });
});

describe('calculateImpact', () => {
  it('returns impact value and unit for a known program type', () => {
    const result = calculateImpact(25000, 'schoolDays');
    expect(result.value).toBeGreaterThan(0);
    expect(result.unit).toBeTruthy();
  });

  it('returns a fallback for unknown programs', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = calculateImpact(10000, 'unknown-program' as any);
    expect(result).toBeTruthy();
    expect(result.value).toBe(0);
  });

  it('handles large amounts', () => {
    const result = calculateImpact(1000000, 'medicalVisits');
    expect(result.value).toBeGreaterThan(0);
    expect(result.unit).toBeTruthy();
  });
});
