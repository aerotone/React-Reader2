import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI';
import ListBooks from './ListBooks';
import SearchForBooks from './SearchForBooks';
import './App.css';

class App extends Component {

  state = {
    books: [],
    allBooks: []
  }
  
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  moveBook = ( book, shelf ) => {

    book.shelf = shelf

    this.setState(function (state){
      let list1 = state.books.filter((tbook) => book.id !== tbook.id)
      let list2 = list1.concat([book])
      return {
        books: list2
      }
    })

    BooksAPI.update(book, shelf)
  }

  searchBooks = ( searchQuery, maxResults) => {
    BooksAPI.search(searchQuery, maxResults).then((allBooks) => {
      if (searchQuery === '') {
        allBooks = []
      }
      this.setState({allBooks});
    })
  }

  componentDidMount(){
    this.getBooks()
  }

  render() {
    return (
      <div className="App wrapper">
        <Route exact path="/" render={() => (
            <ListBooks 
              shelfBooks={this.state.books} 
              onCheckShelves={this.checkShelves}
              onMoveBook={this.moveBook}/>
          )} />
          <Route path="/search" render={( { history } ) => (
            <SearchForBooks
              allBooks={this.state.allBooks}
              shelfBooks={this.state.books}
              onMoveBook={this.moveBook}
              onSearchBooks={(bookTitle, maxResults) => {
                this.searchBooks(bookTitle, maxResults)
                // history.push('/')
              }}
          />
          )}/>
      </div>
    );
  }
}

export default App;
