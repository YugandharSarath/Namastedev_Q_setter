import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Helper to advance intersection observer
function triggerIntersection(element: Element) {
  (window.IntersectionObserver as any).mock.instances.forEach((instance: any) => {
    act(() => {
      instance.trigger([{ isIntersecting: true, target: element }]);
    });
  });
}

describe('App Infinite Scroll', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Mock IntersectionObserver
    (window as any).IntersectionObserver = jest.fn(function (cb) {
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
      this.trigger = (entries: any) => cb(entries, this);
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders initial items and loads more on scroll', async () => {
    render(<App />);
    // Fast-forward the timer for initial fetch
    act(() => {
      jest.runAllTimers();
    });
    // Initial load
    expect(await screen.findByText('Item 1')).toBeInTheDocument();
    expect(await screen.findByText('Item 10')).toBeInTheDocument();
    // Loader should show

    // Simulate intersection to load next page
    const loader = screen.getByTestId('loader-ref');
    triggerIntersection(loader);
    act(() => {
      jest.runAllTimers();
    });
    // Wait for next items
    expect(await screen.findByText('Item 11')).toBeInTheDocument();
    expect(await screen.findByText('Item 20')).toBeInTheDocument();
  });

  it('shows end message when all items are loaded', async () => {
    render(<App />);
    const loader = screen.getByTestId('loader-ref');
    // Initial fetch
    act(() => {
      jest.runAllTimers();
    });
    // There are 50 items, 10 per page, so 5 pages
    for (let i = 2; i <= 5; i++) {
      triggerIntersection(loader);
      act(() => {
        jest.runAllTimers();
      });
      await waitFor(() => {
        expect(screen.getByText(`Item ${i * 10}`)).toBeInTheDocument();
      });
    }
    // End message
    expect(await screen.findByText(/you’ve reached the end/i)).toBeInTheDocument();
  });
}); 