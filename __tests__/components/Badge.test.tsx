import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/ui/badge';

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders success variant', () => {
    render(<Badge variant="success">Completed</Badge>);
    const badge = screen.getByText('Completed');
    expect(badge).toHaveClass('bg-emerald-100');
  });

  it('renders gold variant', () => {
    render(<Badge variant="gold">Gold</Badge>);
    const badge = screen.getByText('Gold');
    expect(badge).toHaveClass('bg-gold-100');
  });

  it('shows dot indicator when dot prop is true', () => {
    const { container } = render(<Badge dot>Live</Badge>);
    expect(container.querySelector('.rounded-full.size-1\\.5')).toBeInTheDocument();
  });
});
