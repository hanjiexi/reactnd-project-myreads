import React from 'react';
import Shelf from './Shelf';

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf />
        </div>
        <div className="open-search">
          <a onClick={() => this.props.showSearch()}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default ListBooks;