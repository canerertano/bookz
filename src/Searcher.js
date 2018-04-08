import React, {Component} from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class Searcher extends Component{
/**Todo : PropTypes */
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author" 
                            onChange={(event) => this.props.changeQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.searchedBooks.map((book) => (
                            <li key={'sb_'+book.id}>
                                <Book book={book} changeShelf={this.props.changeShelf} history={this.props.history}/>
                            </li>          
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Searcher