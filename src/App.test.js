import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub is awesome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub is awesome/i);
  expect(linkElement).toBeInTheDocument();
});
