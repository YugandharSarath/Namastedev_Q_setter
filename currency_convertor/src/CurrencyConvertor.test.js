import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CurrencyConverter from './CurrencyConvertor';
import '@testing-library/jest-dom';

global.fetch = jest.fn();

const mockCurrencies = {
  USD: 'US Dollar',
  INR: 'Indian Rupee',
  EUR: 'Euro',
};

const mockConversion = {
  rates: {
    INR: 83.55,
  },
};

beforeEach(() => {
  fetch.mockClear();
});

test('renders converter and fetches currencies', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => mockCurrencies,
  });

  render(<CurrencyConverter />);
  expect(await screen.findByText(/Currency Converter/i)).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('performs currency conversion', async () => {
  fetch
    .mockResolvedValueOnce({ json: async () => mockCurrencies }) 
    .mockResolvedValueOnce({ json: async () => mockConversion }); 

  render(<CurrencyConverter />);

  await screen.findByLabelText(/From:/);

  fireEvent.change(screen.getByLabelText(/Amount:/), {
    target: { value: '1' },
  });

  fireEvent.click(screen.getByRole('button', { name: /Convert/i }));

  await waitFor(() =>
    expect(
      screen.getByText(/Converted Amount: ₹83.55/)
    ).toBeInTheDocument()
  );
});
