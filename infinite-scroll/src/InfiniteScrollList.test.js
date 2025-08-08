import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

let observerInstances = [];

// Helper to simulate intersection
function triggerIntersection(element) {
  observerInstances.forEach((instance) => {
    act(() => {
      instance.trigger([{ isIntersecting: true, target: element }]);
    });
  });
}

describe("App Infinite Scroll", () => {
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

  it("renders initial items and loads more on scroll", async () => {
    render(<App />);

    act(() => {
      jest.runAllTimers();
    });

    // Use findAllByTestId for multiple items
    const listItems = await screen.findAllByTestId("list-item");
    expect(listItems[0]).toHaveTextContent("Item 1");
    expect(listItems.length).toBe(10);
    expect(listItems[9]).toHaveTextContent("Item 10");

    const loader = screen.getByTestId("loader-ref");
    triggerIntersection(loader);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      const updatedItems = screen.getAllByTestId("list-item");
      expect(updatedItems.length).toBeGreaterThan(10);
      expect(updatedItems[10]).toHaveTextContent("Item 11");
      expect(updatedItems[19]).toHaveTextContent("Item 20");
    });
  });

  it("shows loading indicator while fetching", async () => {
    render(<App />);

    // Initially loading indicator is shown
    expect(screen.getByTestId("loading-text")).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.queryByTestId("loading-text")).not.toBeInTheDocument();
    });
  });

  it("shows end message when all items are loaded", async () => {
    render(<App />);

    act(() => {
      jest.runAllTimers();
    });

    const loader = screen.getByTestId("loader-ref");

    // Load all pages (5 pages total for 50 items)
    for (let i = 2; i <= 5; i++) {
      triggerIntersection(loader);
      act(() => {
        jest.runAllTimers();
      });

      await waitFor(() =>
        expect(
          screen
            .getAllByTestId("list-item")
            .some((item) => item.textContent === `Item ${i * 10}`)
        ).toBe(true)
      );
    }

    // After last page, end message is shown
    expect(await screen.findByTestId("end-message")).toHaveTextContent(
      /you’ve reached the end/i
    );
  });

  it("does not fetch more after end reached", async () => {
    render(<App />);
    act(() => {
      jest.runAllTimers();
    });

    const loader = screen.getByTestId("loader-ref");

    for (let i = 2; i <= 5; i++) {
      triggerIntersection(loader);
      act(() => {
        jest.runAllTimers();
      });

      await waitFor(() =>
        expect(
          screen
            .getAllByTestId("list-item")
            .some((item) => item.textContent === `Item ${i * 10}`)
        ).toBe(true)
      );
    }

    // Try triggering intersection again after end
    triggerIntersection(loader);

    act(() => {
      jest.runAllTimers();
    });

    // The number of items should remain 50, no more added
    expect(screen.getAllByTestId("list-item").length).toBe(50);

    // End message still shown
    expect(screen.getByTestId("end-message")).toBeInTheDocument();
  });
});
