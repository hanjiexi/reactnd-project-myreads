import React from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';
import Shelves from './Shelves';

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Shelves.t.map(s => (
            s !== "none" && (
              <Shelf
                shelf={s}
                books={props.books.filter(b => b.shelf === s)}
                move={props.move}
                key={s}
              />)
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

export default ListBooks;