import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('renders the Little Lemon logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/little lemon logo/i);
  expect(logoElement).toBeInTheDocument();
});