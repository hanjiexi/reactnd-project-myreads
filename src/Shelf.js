import React from 'react';
import BooksGrid from './BooksGrid';

const shelfName = (s) => {
  switch (s) {
    case "currentlyReading": return "Currently Reading";
    case "wantToRead": return "Want to Read";
    case "read": return "Read";
    default: return "Error";
  }
}

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName(this.props.shelf)}</h2>
        <BooksGrid
          shelves={this.props.shelves}
          books={this.props.books}
          move={this.props.move}
          shelfName={shelfName}
        />
      </div>
    );
  }
}

export default Shelf;