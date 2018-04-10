import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
    static propTypes = {
		book : PropTypes.object.isRequired,
        changeShelf : PropTypes.func.isRequired
    }

    render (){
        const {book, changeShelf, history} = this.props
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf !== undefined ? book.shelf:"unselected"}
                    onChange={(event) => changeShelf(book, event.target.value, history)}>
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