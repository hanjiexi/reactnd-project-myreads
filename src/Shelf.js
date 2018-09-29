import React from 'react';
import BooksGrid from './BooksGrid';
import Shelves from './Shelves';

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{Shelves.idToName(this.props.shelf)}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={this.props.books}
            move={this.props.move}
          />
        </div>
      </div>
    );
  }
}

export default Shelf;