import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import SearchBooks from './SearchBooks'


class BooksApp extends Component {
  state = {
    books: [],
    queryBooks: [],
    query: ""
  }

  async componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }


  changeShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: state.books.filter((b) => b.title !== book.title).concat([book])
      }));
    });
  }


  queryBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(books => {
        this.setState({ queryBooks: books, query: query })
      })
    } else {
      this.setState({ queryBooks: [], query: "" })
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
                { [ { filter: "currentlyReading", title: "Currently Reading" },
                    { filter: "wantToRead", title: "Want to Read" },
                    { filter: "read", title: "Read" }
                  ].map((shelf, key) => 
                    <Shelf key={ key }
                      title={ shelf.title }
                      books={ this.state.books.filter( book => book.shelf === shelf.filter) }
                      changeShelf={ this.changeShelf }
                    />
                ) }
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
              query={ this.state.query }
              books={ this.state.queryBooks }
              queryBooks={ this.queryBooks }
              changeShelf={ this.changeShelf }
            />
          } />
        </div>
      )
  }
}

export default BooksApp
