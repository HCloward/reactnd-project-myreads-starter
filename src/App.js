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
  getBooks = ()=>{
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  changeShelfFromSearch = (book, shelf) => {
    return this.setState((state) => {
      BooksAPI.update(book, shelf)
    })
  }
  changeShelf = (book, shelf) => {
    this.setState((state) => {
      BooksAPI.update(book, shelf)
    })
    this.getBooks()
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
                  books={ this.state.books.filter( books => books.shelf === "currentlyReading") }
                  changeShelf={ this.changeShelf }
                  getBooks={ this.getBooks }
                />
                <Shelf
                  title="Want to Read"
                  books={ this.state.books.filter( books => books.shelf === "wantToRead") }
                  changeShelf={ this.changeShelf }
                  getBooks={ this.getBooks }
                />
                <Shelf
                  title="Read"
                  books={ this.state.books.filter( books => books.shelf === "read") }
                  changeShelf={ this.changeShelf }
                  getBooks={ this.getBooks }
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
              changeShelf={ this.changeShelfFromSearch }
              queryBooks={ this.queryBooks }
              getBooks={ this.getBooks }
            />
          } />
        </div>
      )
  }
}

export default BooksApp
