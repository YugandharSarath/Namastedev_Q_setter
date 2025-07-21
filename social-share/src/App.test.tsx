import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShareDialogWrapper from './App';

// Mock clipboard API
beforeAll(() => {
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: jest.fn() },
    writable: true,
  });
});

describe('ShareDialogWrapper', () => {
  it('renders the Share This button', () => {
    render(<ShareDialogWrapper />);
    expect(screen.getByRole('button', { name: /share this/i })).toBeInTheDocument();
  });

  it('opens and closes the dialog', () => {
    render(<ShareDialogWrapper />);
    fireEvent.click(screen.getByRole('button', { name: /share this/i }));
    expect(screen.getByText(/share this page/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // Dialog should close (title should not be in the document)
    waitFor(() => {
      expect(screen.queryByText(/share this page/i)).not.toBeInTheDocument();
    });
  });

  it('shows all social share buttons', () => {
    render(<ShareDialogWrapper />);
    fireEvent.click(screen.getByRole('button', { name: /share this/i }));
    expect(screen.getByTitle(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByTitle(/x/i)).toBeInTheDocument();
    expect(screen.getByTitle(/whatsapp/i)).toBeInTheDocument();
    expect(screen.getByTitle(/facebook/i)).toBeInTheDocument();
    expect(screen.getByTitle(/telegram/i)).toBeInTheDocument();
    expect(screen.getByTitle(/reddit/i)).toBeInTheDocument();
    expect(screen.getByTitle(/email/i)).toBeInTheDocument();
  });

  it('copies the link to clipboard', async () => {
    window.alert = jest.fn();
    render(<ShareDialogWrapper />);
    fireEvent.click(screen.getByRole('button', { name: /share this/i }));
    fireEvent.click(screen.getByRole('button', { name: /copy/i }));
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://namaste.dev');
      expect(window.alert).toHaveBeenCalledWith('Link copied to clipboard!');
    });
  });
}); 