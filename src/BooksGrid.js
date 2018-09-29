import React from 'react';
import Book from './Book';

function BooksGrid(props) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(b => (
          <li key="book-{b.id}">
            <Book book={b} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BooksGrid;