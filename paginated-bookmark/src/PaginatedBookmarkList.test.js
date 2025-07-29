import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginatedBookmarkList from './PaginatedBookmarkList';
import '@testing-library/jest-dom';

describe('PaginatedBookmarkList', () => {
  beforeEach(() => {
    render(<PaginatedBookmarkList />);
  });

  test('displays only 5 articles per page', () => {
    const articles = screen.getAllByText(/Article \d+/);
    expect(articles.length).toBeLessThanOrEqual(5);
  });

  test('pagination updates displayed articles', () => {
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    const articles = screen.getAllByText(/Article \d+/);
    expect(articles.length).toBeLessThanOrEqual(5);
    expect(screen.queryByText('Article 1')).toBeNull();
  });

  test('bookmark icon toggles bookmark state', () => {
    const bookmarkIcons = screen.getAllByText('★');
    const firstIcon = bookmarkIcons[0];
    expect(firstIcon.className).not.toContain('active');
    fireEvent.click(firstIcon);
    expect(firstIcon.className).toContain('active');
    fireEvent.click(firstIcon);
    expect(firstIcon.className).not.toContain('active');
  });

  test('show only bookmarked filter works', () => {
    const bookmarkIcons = screen.getAllByText('★');
    fireEvent.click(bookmarkIcons[0]);
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    const articles = screen.getAllByText(/Article \d+/);
    expect(articles.length).toBe(1);
  });

  test('pagination works in bookmarked-only mode', () => {
    let toBookmark = 6;
    while (toBookmark > 0) {
      const bookmarkIcons = screen.queryAllByText('★');
      if (bookmarkIcons.length === 0) break;
      fireEvent.click(bookmarkIcons[0]);
      toBookmark--;
    }
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    const articles = screen.queryAllByText(/Article \d+/);
    if (articles.length > 0) {
      expect(articles.length).toBeLessThanOrEqual(5);
      const nextButton = screen.getByText('Next');
      fireEvent.click(nextButton);
      const nextArticles = screen.queryAllByText(/Article \d+/);
      expect(nextArticles.length).toBeLessThanOrEqual(5);
    } else {
      expect(screen.getByText('No articles to display.')).toBeInTheDocument();
    }
  });

  test('bookmarks remain after switching pages and filters', () => {
    const bookmarkIcons = screen.getAllByText('★');
    fireEvent.click(bookmarkIcons[0]);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    const prevButton = screen.getByText('Prev');
    fireEvent.click(prevButton);
    expect(bookmarkIcons[0].className).toContain('active');
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    fireEvent.click(filterCheckbox);
    expect(bookmarkIcons[0].className).toContain('active');
  });

  test('list becomes empty if all bookmarks are removed in bookmarked-only view', () => {
    const bookmarkIcons = screen.getAllByText('★');
    fireEvent.click(bookmarkIcons[0]);
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    fireEvent.click(screen.getAllByText('★')[0]);
    expect(screen.getByText('No articles to display.')).toBeInTheDocument();
  });
});
