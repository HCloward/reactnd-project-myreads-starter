import React, { Component } from 'react'
import Book from './Book'


class Shelf extends Component {

    changeShelf = (book, shelf) => {
        (new Promise((resolve, reject)=>{
            this.props.changeShelf(book, shelf)
            resolve()
        })).then(
            this.props.getBooks()
        )
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { this.props.books.map((book) => (
                            <li key={book.title}>
                                <Book 
                                    book={book}
                                    changeShelf={ this.changeShelf }
                                />
                            </li>
                        )) }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf