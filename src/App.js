import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import ListBooks from './ListBooks';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
            <ListBooks books={this.state.books}/>
        </Container>
      </div>
    );
  }
}

export default App;
