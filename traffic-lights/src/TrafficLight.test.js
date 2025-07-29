import React from "react";
import { render } from "@testing-library/react";
import TrafficLight from "./TrafficLight";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

describe("TrafficLight Component", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test("Initial State: Red light should be active", () => {
    render(<TrafficLight />);
    const red = document.querySelector(".light.red");
    expect(red).toHaveClass("on");
    expect(document.querySelector(".light.yellow")).not.toHaveClass("on");
    expect(document.querySelector(".light.green")).not.toHaveClass("on");
  });

  test("Light Transition: Red → Green after 3s", async () => {
    render(<TrafficLight />);
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    const green = document.querySelector(".light.green");
    expect(green).toHaveClass("on");
    expect(document.querySelector(".light.red")).not.toHaveClass("on");
    expect(document.querySelector(".light.yellow")).not.toHaveClass("on");
  });

  test("Full Cycle: Red → Green → Yellow → Red", async () => {
    render(<TrafficLight />);
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector(".light.green")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector(".light.yellow")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(document.querySelector(".light.red")).toHaveClass("on");
  });

  test("Loop Continuity: Cycles correctly for 2 full cycles", async () => {
    render(<TrafficLight />);
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector(".light.green")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector(".light.yellow")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(document.querySelector(".light.red")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector(".light.green")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector(".light.yellow")).toHaveClass("on");

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(document.querySelector(".light.red")).toHaveClass("on");
  });

  test("Visual Feedback: Only one light is active at a time", async () => {
    render(<TrafficLight />);
    const getActiveCount = () => [
      document.querySelector(".light.red"),
      document.querySelector(".light.yellow"),
      document.querySelector(".light.green")
    ].filter(el => el && el.classList.contains("on")).length;

    expect(getActiveCount()).toBe(1);

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(getActiveCount()).toBe(1);

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(getActiveCount()).toBe(1);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(getActiveCount()).toBe(1);
  });
});
