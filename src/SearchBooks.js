import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';

class SearchBooks extends React.Component {
  state = {
    query: '',
    queriedBooks: []
  };

  updateQuery = q => {
    this.setState(() => ({
      query: q
    }));

    if (q.trim() !== '') {
      BooksAPI.search(q.trim())
        .then(books => {
          this.setState(() => ({
            queriedBooks: this.props.format(books)
          }));
        });
    } else {
      this.setState(() => ({ queriedBooks: [] }));
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            books={this.state.queriedBooks}
            move={this.props.move}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;