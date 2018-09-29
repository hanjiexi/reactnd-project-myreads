import React from 'react';
import SelectShelf from './SelectShelf';

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={props.book.cover}></div>
        <SelectShelf
          shelves={props.shelves}
          move={props.move}
          shelfName={props.shelfName}
          currentShelf={props.book.shelf}
          book={props.book}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.author}</div>
    </div>
  );
}

export default Book;