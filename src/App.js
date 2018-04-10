import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Searcher from './components/Searcher'
import Shelfer from './components/Shelfer'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchedBooks: [],
    shelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  shelfSplitter = (shelf) => {
    return this.state.books.filter((book) => (
        book.shelf === shelf))
  }

  findShelf = (bookId) => {
    if(this.state.shelfs.currentlyReading.includes(bookId))
      return 'currentlyReading'
    if(this.state.shelfs.wantToRead.includes(bookId))
      return 'wantToRead'
    if(this.state.shelfs.read.includes(bookId))
      return 'read'
    return undefined
  }

  changeShelf = (book, shelf, history) => {
    BooksAPI.update(book, shelf)
    .then((response) => {
      let exist = false
      let vBooks = this.state.books.slice()
      vBooks.forEach((vBook) => {
        if (vBook.id === book.id) {
          vBook.shelf = shelf
          exist = true
        } 
      })

      if(!exist){
        book.shelf = shelf
        vBooks.push(book)
      }

      this.setState({
        books: vBooks,
        shelfs: response
      })

      if((history !== undefined && shelf !== 'none') 
        || (history !== undefined && exist && shelf === 'none'))
        history.push('/');
    })
  }

  changeQuery = (query) => {
    if(query && query.length > 0){
      BooksAPI.search(query)
      .then((books) => {
        books.forEach((book) => {
          book.shelf = this.findShelf(book.id)
        })
        this.setState({
          searchedBooks: books
        })
      })
      .catch((err) => {
        this.clearSearchedBooks()
      })
    } else {
      this.clearSearchedBooks()
    }
  }

  clearSearchedBooks = () => {
    this.setState({
        searchedBooks: []
    })
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      let vShelfs = Object.assign(this.state.shelfs)
      books.forEach((book) => {
        if(book.shelf === 'currentlyReading')
          vShelfs.currentlyReading.push(book.id)
        if(book.shelf === 'wantToRead')
          vShelfs.wantToRead.push(book.id)
        if(book.shelf === 'read')
          vShelfs.read.push(book.id)
      })

      this.setState(() => ({
        books: books,
        shelfs: vShelfs
      }))
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route path='/search' 
            render={({history}) => (
              <Searcher
                searchedBooks={this.state.searchedBooks} 
                changeQuery={this.changeQuery}
                changeShelf={this.changeShelf}
                history={history}/>
            )} />
          <Route exact path='/' 
            render={() => (
              <Shelfer 
                title={'Bookz'}
                shelfSplitter={this.shelfSplitter}
                changeShelf={this.changeShelf}
                clearSearchedBooks={this.clearSearchedBooks}/>
            )} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
