import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';

const formatBooks = books => (
  books.map(b => ({
    cover: {
      width: 128,
      height: 170,
      backgroundImage: `url(${b.imageLinks.smallThumbnail})`
    },
    author: b.authors[0],
    title: b.title,
    shelf: b.shelf,
    id: b.id
  }))
);

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books: formatBooks(books)
        }))
      })
  }

  moveBook = (book, newShelf) => {
    const updatedBook = {
      cover: book.cover,
      title: book.title,
      author: book.author,
      shelf: newShelf,
      id: book.id
    };

    this.setState(prevState => ({
      books: prevState.books.map(b => b.id === book.id ? updatedBook : b)
    }));
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} move={this.moveBook} />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books} move={this.moveBook} />
        )} />
      </div>
    );
  }
}

export default BooksApp;