import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginatedBookmarkList from './components/PaginatedBookmarkList';
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
    // Should not see Article 1 on page 2
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
    // Bookmark the first article
    const bookmarkIcons = screen.getAllByText('★');
    fireEvent.click(bookmarkIcons[0]);
    // Toggle filter
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    // Only one article should be shown
    const articles = screen.getAllByText(/Article \d+/);
    expect(articles.length).toBe(1);
  });

  test('pagination works in bookmarked-only mode', () => {
    // Bookmark 6 articles (or as many as available)
    let toBookmark = 6;
    while (toBookmark > 0) {
      const bookmarkIcons = screen.queryAllByText('★');
      if (bookmarkIcons.length === 0) break;
      fireEvent.click(bookmarkIcons[0]);
      toBookmark--;
    }
    // Toggle filter
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    // If there are any articles, check count, else check for empty message
    const articles = screen.queryAllByText(/Article \d+/);
    if (articles.length > 0) {
      expect(articles.length).toBeLessThanOrEqual(5);
      // Go to next page
      const nextButton = screen.getByText('Next');
      fireEvent.click(nextButton);
      const nextArticles = screen.queryAllByText(/Article \d+/);
      // Should be 1 or 0 on the next page
      expect(nextArticles.length).toBeLessThanOrEqual(5);
    } else {
      expect(screen.getByText('No articles to display.')).toBeInTheDocument();
    }
  });

  test('bookmarks remain after switching pages and filters', () => {
    // Bookmark first article
    const bookmarkIcons = screen.getAllByText('★');
    fireEvent.click(bookmarkIcons[0]);
    // Go to next page and back
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    const prevButton = screen.getByText('Prev');
    fireEvent.click(prevButton);
    // Should still be bookmarked
    expect(bookmarkIcons[0].className).toContain('active');
    // Toggle filter and back
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    fireEvent.click(filterCheckbox);
    expect(bookmarkIcons[0].className).toContain('active');
  });

  test('list becomes empty if all bookmarks are removed in bookmarked-only view', () => {
    // Bookmark first article
    const bookmarkIcons = screen.getAllByText('★');
    fireEvent.click(bookmarkIcons[0]);
    // Toggle filter
    const filterCheckbox = screen.getByLabelText('Show only bookmarked');
    fireEvent.click(filterCheckbox);
    // Unbookmark
    fireEvent.click(screen.getAllByText('★')[0]);
    // Should show empty message
    expect(screen.getByText('No articles to display.')).toBeInTheDocument();
  });
}); 