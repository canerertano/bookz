import React, { Component } from 'react'
import Book from './Book';

class BookShelf extends Component {
    render () {
        const {bookShelf, changeShelf} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookShelf.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} changeShelf={changeShelf}/>
                            </li>          
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;