import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';

let observerInstances = [];

// Helper to simulate intersection
function triggerIntersection(element) {
  observerInstances.forEach((instance) => {
    act(() => {
      instance.trigger([{ isIntersecting: true, target: element }]);
    });
  });
}

describe('App Infinite Scroll', () => {
  beforeEach(() => {
    jest.useFakeTimers();

    // Reset instance tracking
    observerInstances = [];

    // Mock IntersectionObserver
    window.IntersectionObserver = jest.fn(function (callback) {
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
      this.trigger = (entries) => callback(entries, this);
      observerInstances.push(this);
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders initial items and loads more on scroll', async () => {
    render(<App />);

    act(() => {
      jest.runAllTimers();
    });

    expect(await screen.findByText('Item 1')).toBeInTheDocument();
    expect(await screen.findByText('Item 10')).toBeInTheDocument();

    const loader = await screen.findByTestId('loader-ref');
    triggerIntersection(loader);

    act(() => {
      jest.runAllTimers();
    });

    expect(await screen.findByText('Item 11')).toBeInTheDocument();
    expect(await screen.findByText('Item 20')).toBeInTheDocument();
  });

  it('shows end message when all items are loaded', async () => {
    render(<App />);

    act(() => {
      jest.runAllTimers();
    });

    const loader = await screen.findByTestId('loader-ref');

    for (let i = 2; i <= 5; i++) {
      triggerIntersection(loader);
      act(() => {
        jest.runAllTimers();
      });

      await waitFor(() =>
        expect(screen.getByText(`Item ${i * 10}`)).toBeInTheDocument()
      );
    }

    expect(
      await screen.findByText(/you’ve reached the end/i)
    ).toBeInTheDocument();
  });
});
