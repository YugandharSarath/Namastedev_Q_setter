import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const TOTAL_ITEMS = 50;
const PAGE_SIZE = 10;

// 👇 JavaScript version: no `: Promise<string[]>`
const mockFetch = (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const end = Math.min(start + PAGE_SIZE, TOTAL_ITEMS);
      const data = Array.from(
        { length: end - start },
        (_, i) => `Item ${start + i + 1}`
      );
      resolve(data);
    }, 1000);
  });
};

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const didLoadPageRef = useRef(new Set()); // ✅ Set for JS too

  useEffect(() => {
    const loadItems = async () => {
      if (didLoadPageRef.current.has(page)) return;
      didLoadPageRef.current.add(page);

      setIsLoading(true);
      const newItems = await mockFetch(page);
      setItems((prev) => [...prev, ...newItems]);
      setIsLoading(false);
      if (newItems.length < PAGE_SIZE) setHasMore(false);
    };

    loadItems();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, isLoading]);

  return (
    <div className="container">
      <ul className="list">
        {items.map((item) => (
          <li key={item} className="item">
            {item}
          </li>
        ))}
      </ul>
      {isLoading && <p className="loader">Loading...</p>}
      {!hasMore && <p className="end">You’ve reached the end</p>}
      <div ref={loaderRef} data-testid="loader-ref"></div>
    </div>
  );
}
