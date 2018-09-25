import React, { Component } from 'react'
import Book from './Book'


class Shelf extends Component {

    state = {
        books: this.props.books
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

    render() {
        //console.log(JSON.stringify(this.state.books))
        //console.log(JSON.stringify(this.props.books))
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { this.props.books.map((book) => (
                            <li key={book.id}>
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