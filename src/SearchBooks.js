import React from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';

class SearchBooks extends React.Component {
  state = {
    query: ''
  };

  updateQuery = q => {
    this.setState(() => ({ query: q }));
  };

  render() {
    const queriedBooks = this.state.query === ''
      ? []
      : this.props.books.filter(b => (
        b.author.toLowerCase().includes(this.state.query.toLowerCase())
        || b.title.toLowerCase().includes(this.state.query.toLowerCase())
      ));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            books={queriedBooks}
            move={this.props.move}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;