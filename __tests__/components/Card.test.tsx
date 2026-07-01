import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

describe('Card', () => {
  it('renders card with all sub-components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
        </CardHeader>
        <CardContent>Content here</CardContent>
        <CardFooter>Footer here</CardFooter>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Content here')).toBeInTheDocument();
    expect(screen.getByText('Footer here')).toBeInTheDocument();
  });

  it('applies hover styles when hover prop is true', () => {
    const { container } = render(<Card hover>Hoverable Card</Card>);
    expect(container.firstChild).toHaveClass('hover:shadow-lg');
  });
});
