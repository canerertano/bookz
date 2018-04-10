import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class Shelfer extends Component{
    static propTypes = {
		title : PropTypes.string.isRequired,
        shelfSplitter : PropTypes.func.isRequired,
        changeShelf : PropTypes.func.isRequired,
        clearSearchedBooks : PropTypes.func.isRequired
    }

    render(){
        const {title, shelfSplitter, changeShelf, clearSearchedBooks} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{title}</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            title='Currently Reading'
                            books={shelfSplitter('currentlyReading')} 
                            changeShelf={changeShelf}/>
                        <BookShelf 
                            title='Want to Read'
                            books={shelfSplitter('wantToRead')} 
                            changeShelf={changeShelf}/>
                        <BookShelf 
                            title='Read'
                            books={shelfSplitter('read')} 
                            changeShelf={changeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' onClick={clearSearchedBooks}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelfer