import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import SearchBooks from './SearchBooks'


class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  changeShelf = (book, shelf) => {
    let index;
    for (index = 0; index < this.state.books.length; index++) {
        if (this.state.books[index].title === book.title) {
            break;
        }
    }
    if (index === this.state.books.length) return;
    this.setState((state)=>{
      state.books[index].shelf = shelf
      return state
    })
    BooksAPI.update(book, shelf);
  }
  queryBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(books => {
        this.setState({ books })
      })
    } else {
      BooksAPI.getAll().then(books => {
        this.setState({ books })
      })
    }
  }

  render() {
      return (
        <div className="app">
          <Route path="/" exact render={() => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  title="Currently Reading"
                  books={ this.state.books.filter( book => book.shelf === "currentlyReading") }
                  changeShelf={ this.changeShelf }
                />
                <Shelf
                  title="Want to Read"
                  books={ this.state.books.filter( book => book.shelf === "wantToRead") }
                  changeShelf={ this.changeShelf }
                />
                <Shelf
                  title="Read"
                  books={ this.state.books.filter( book => book.shelf === "read") }
                  changeShelf={ this.changeShelf }
                />
              </div>
            </div>
            <div className="open-search">
              <Link 
                to="/search"
                >Add a book</Link>
            </div>
          </div>
          )}/>

          <Route path="/search" render={() => 
            <SearchBooks
              books={ this.state.books }
              changeShelf={ this.changeShelf }
              queryBooks={ this.queryBooks }
            />
          } />
        </div>
      )
  }
}

export default BooksApp
