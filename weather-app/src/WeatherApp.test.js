import '@testing-library/jest-dom';
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import WeatherApp from "./WeatherApp";

// Mock geolocation
const mockGeolocation = {
  getCurrentPosition: jest.fn(),
};

global.navigator.geolocation = mockGeolocation;

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("WeatherApp", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
      configurable: true,
    });
  });

  // GEO-01: Browser supports geolocation
  it("asks for geolocation permission if supported", () => {
    render(<WeatherApp />);
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  });

  // GEO-02: User allows location access
  it("fetches weather data when user allows location", async () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) => {
      success({ coords: { latitude: 10, longitude: 20 } });
    });
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        cod: 200,
        main: { temp: 25, humidity: 60 },
        weather: [{ description: "clear sky" }],
        name: "Test City",
      }),
    });
    render(<WeatherApp />);
    await waitFor(() => {
      expect(screen.getByText("Test City")).toBeInTheDocument();
      expect(screen.getByText(/Temperature: 25/)).toBeInTheDocument();
      expect(screen.getByText(/Humidity: 60/)).toBeInTheDocument();
      expect(screen.getByText(/Description: clear sky/)).toBeInTheDocument();
    });
  });

  // GEO-03: User denies location access
  it("shows error if user denies location access", async () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce((_, error) => {
      error();
    });
    render(<WeatherApp />);
    await waitFor(() => {
      expect(
        screen.getByText("Permission denied or unable to get location.")
      ).toBeInTheDocument();
    });
  });

  // GEO-04: Device does not support geolocation
  it("shows error if geolocation is not supported", async () => {
    delete global.navigator.geolocation;
    render(<WeatherApp />);
    await waitFor(() => {
      expect(
        screen.getByText("Geolocation is not supported by your browser.")
      ).toBeInTheDocument();
    });
    global.navigator.geolocation = mockGeolocation;
  });

  // API-02: Invalid API key
  it("shows error if API key is invalid", async () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) => {
      success({ coords: { latitude: 10, longitude: 20 } });
    });
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ cod: 401, message: "Invalid API key" }),
    });
    render(<WeatherApp />);
    await waitFor(() => {
      expect(screen.getByText("Invalid API key")).toBeInTheDocument();
    });
  });

  // API-03: No internet connection
  it("shows error if fetch fails (no internet)", async () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) => {
      success({ coords: { latitude: 10, longitude: 20 } });
    });
    mockFetch.mockRejectedValueOnce(new Error("Failed to fetch"));
    render(<WeatherApp />);
    expect(await screen.findByText("Failed to fetch")).toBeInTheDocument();
  });

  // API-04: API rate limit exceeded
  it("shows error if API rate limit exceeded", async () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) => {
      success({ coords: { latitude: 10, longitude: 20 } });
    });
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ cod: 429, message: "API rate limit exceeded" }),
    });
    render(<WeatherApp />);
    await waitFor(() => {
      expect(
        screen.getByText("API rate limit exceeded")
      ).toBeInTheDocument();
    });
  });

  // UI-03: Loading state
  it("shows loading state initially", () => {
    render(<WeatherApp />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
