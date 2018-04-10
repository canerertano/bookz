import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    static propTypes = {
		book : PropTypes.object.isRequired,
        changeShelf : PropTypes.func.isRequired
    }
    
    render () {
        const { book, changeShelf, history } = this.props
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, 
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <BookShelfChanger 
                        book={book}
                        changeShelf={changeShelf}
                        history={history}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.length > 0 && book.authors.map((author, index) => (
                    <div key={'author_'+index} className="book-authors">{author}</div>
                ))}
            </div>
        )
    }
}

export default Book;