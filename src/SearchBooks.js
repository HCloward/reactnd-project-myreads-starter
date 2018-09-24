import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {
    state = {
        query: "",
        books: []
    }

    changeShelf = (book, shelf) => {
        /*
        let index;
        for (index = 0; index < this.state.books.length; index++) {
            if (this.state.books[index].title === book.title) {
                break;
            }
        }
        this.setState((state)=>{
            state.books[index].shelf = shelf
            return state
        })
        */
        let index;
        for (index = 0; index < this.props.books.length; index++) {
            if (this.props.books[index].title === book.title) {
                break;
            }
        }
        this.props.changeShelf(book, shelf)
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.props.queryBooks(query)
    }

    render() {
        /*
        let viewBooks
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            viewBooks = this.props.books.filter(book => match.test(book.title) || match.test(book.authors) || match.test(book.categories))
        } else {
            viewBooks = []        
        }
        */

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={ (event) => this.updateQuery(event.currentTarget.value) } value={ this.state.query }/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { this.state.query && Array.isArray(this.props.books) ?
                            this.props.books.map((book) => (
                                <li key={book.title}>
                                    <Book book={ book } 
                                        changeShelf={ this.props.changeShelf } />
                                </li>
                            ))
                            : ''
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks