import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books: this.formatBooks(books)
        }))
      })
  }

  getShelf = id => {
    const book = this.state.books.find(b => b.id === id);
    return book ? book.shelf : "none";
  };

  formatBooks = books => {
    return Object.values(books)
      .filter(b => b.hasOwnProperty('title'))
      .map(b => {
        return {
          cover: {
            width: 128,
            height: 170,
            backgroundImage: b.hasOwnProperty('imageLinks') ? `url(${b.imageLinks.thumbnail})` : "url(..images/blank.png)"
          },
          author: b.hasOwnProperty('authors') ? b.authors[0] : (b.hasOwnProperty('author') ? b.author : ""),
          title: b.title,
          shelf: b.hasOwnProperty('shelf') ? b.shelf : this.getShelf(b.id),
          id: b.id
        }
      })
  };

  moveBook = (book, newShelf) => {
    const updatedBook = {
      cover: book.cover,
      title: book.title,
      author: book.author,
      shelf: newShelf,
      id: book.id
    };

    BooksAPI.update({ id: updatedBook.id }, newShelf)
      .then(post => {
        this.setState(prevState => (
          prevState.books.find(b => b.id === book.id)
            ? { books: prevState.books.map(b => b.id === book.id ? updatedBook : b) }
            : { books: [updatedBook, ...prevState.books] }
        ));
      });
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} move={this.moveBook} />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books} move={this.moveBook} format={this.formatBooks} />
        )} />
      </div>
    );
  }
}

export default BooksApp;