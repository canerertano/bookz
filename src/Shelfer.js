import React, {Component} from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class Shelfer extends Component{
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            bookShelf={this.props.shelfSplitter('currentlyReading')} 
                            changeShelf={this.props.changeShelf}/>
                        <BookShelf 
                            bookShelf={this.props.shelfSplitter('wantToRead')} 
                            changeShelf={this.props.changeShelf}/>
                        <BookShelf 
                            bookShelf={this.props.shelfSplitter('read')} 
                            changeShelf={this.props.changeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' onClick={this.props.clearSearchedBooks}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelfer