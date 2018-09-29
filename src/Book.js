import React from 'react';
import SelectShelf from './SelectShelf';

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={props.book.cover}></div>
        <SelectShelf
          move={props.move}
          shelf={props.book.shelf}
          book={props.book}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.author}</div>
    </div>
  );
}

export default Book;