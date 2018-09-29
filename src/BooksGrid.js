import React from 'react';
import Book from './Book';

function BooksGrid(props) {
  return (
      <ol className="books-grid">
        {props.books.map(b => (
          <li key="book-{b.id}">
            <Book
              shelves={props.shelves}
              book={b}
              move={props.move}
              shelfName={props.shelfName}
            />
          </li>
        ))}
      </ol>
  );
}

export default BooksGrid;