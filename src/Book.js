import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    state = {
        shelf: ((s)=>({"currentlyReading":1,"wantToRead":1,"read":1})[s]?s:"none")(this.props.book.shelf),
        book: this.props.book
    }

    componentDidMount() { 
        BooksAPI.get(this.props.book.id).then(book => {
            this.setState({ book })
        })
    }

    changeShelf = function(shelf) {
        this.setState((state)=>{
            state.book.shelf = shelf
            return state
        })
        this.props.changeShelf(this.state.book, shelf)
    }

    render() {
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (this.state.book.imageLinks ? this.state.book.imageLinks.thumbnail : "./img/default.jpeg") + ')' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => this.changeShelf(e.currentTarget.value) } value={this.state.book.shelf} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{this.state.book.authors}</div>
            </div>
        );
    }
}

export default Book
