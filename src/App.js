import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI';
import ListBooks from './ListBooks';
import SearchForBooks from './SearchForBooks';
import { Container } from 'reactstrap';
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
    this.setState((state) => ({
      books: state.books.filter(function(item){
        if (item.id === book){
          item.shelf = shelf;
          return item;
        }
        return item;
      })
    }))
    BooksAPI.update(book, shelf)
  }
addBook = ( book, shelf ) => {
  book.shelf = shelf
  this.setState(state => ({
    books: state.books.concat([ book ])
  }))
  BooksAPI.update(book, shelf).then((books) => {
    this.getBooks()
  })
}

  searchBooks = ( searchQuery, maxResults) => {
    BooksAPI.search(searchQuery, maxResults).then((allBooks) => {
      this.setState({allBooks});
    })
  }

  componentDidMount(){
    this.getBooks()
  }

  render() {
    return (
      <div className="App">
        <Container>
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} onMoveBook={this.moveBook}/>
          )} />
          <Route path="/search" render={( { history } ) => (
            <SearchForBooks
              allBooks={this.state.allBooks}
              onAddBook={(bookInfo, shelf) => {
                this.addBook(bookInfo, shelf)
               // history.push('/')
              }}
              onMoveBook={this.moveBook}
              onSearchBooks={(bookTitle, maxResults) => {
                this.searchBooks(bookTitle, maxResults)
                // history.push('/')
              }}
          />
          )}/>
        </Container>
      </div>
    );
  }
}

export default App;
