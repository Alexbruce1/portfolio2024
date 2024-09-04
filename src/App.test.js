import { render, screen } from '@testing-library/react';
import { act } from 'react';
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
  act(() => {
    render(<App />);
  });

  const linkElements = screen.getAllByText(/Alex/i);
  
  expect(linkElements.length).toBeGreaterThan(0);
});
