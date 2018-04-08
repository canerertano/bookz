import React, { Component } from 'react'

class BookShelfChanger extends Component {
    render (){
        const {book, changeShelf} = this.props
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf !== undefined ? book.shelf:"unselected"}
                    onChange={(event) => changeShelf(book, event.target.value, this.props.history)}>
                    <option value="unselected" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;