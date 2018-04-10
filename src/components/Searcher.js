import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Searcher extends Component{
    static propTypes = {
		searchedBooks : PropTypes.array.isRequired,
        changeQuery : PropTypes.func.isRequired,
        changeShelf : PropTypes.func.isRequired
    }

    render(){
        const { searchedBooks, changeQuery, changeShelf, history} = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author" 
                            onChange={(event) => changeQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks.map((book) => (
                            <li key={'sbook_'+book.id}>
                                <Book book={book} changeShelf={changeShelf} history={history}/>
                            </li>          
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Searcher