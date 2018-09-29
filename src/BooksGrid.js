import React from 'react';
import Book from './Book';

function BooksGrid(props) {
  return (
      <ol className="books-grid">
        {props.books.map(b => (
          <li key="book-{b.id}">
            <Book
              book={b}
              move={props.move}
            />
          </li>
        ))}
      </ol>
  );
}

export default BooksGrid;