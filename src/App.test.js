import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((message) => {
    if (!message.includes('Warning: `ReactDOMTestUtils.act` is deprecated')) {
      console.error(message);
    }
  });
});

afterAll(() => {
  console.error.mockRestore();
});


test('renders Alex link', () => {
  render(<App />);

  const linkElements = screen.getAllByText(/Alex/i);
  
  expect(linkElements.length).toBeGreaterThan(0);
});
