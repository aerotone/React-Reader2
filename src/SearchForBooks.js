import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleBook from './SingleBook';

// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';

class SearchForBooks extends Component {

    static propTypes = {
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({query: query.trim()})
        this.props.onSearchBooks(query.trim(), 20)
    }
    clearQuery = () => {
        this.setState({ query: '' })
    }
    
    render(){
        return(
            <div>
                <br/>
                <Link className='navLink' to="/">Back</Link>
                <br/>
                <div>
                    <input 
                        className='navLink'
                        type='text'
                        placeholder=' Search Books'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value) }
                        />
                </div>

                {(this.state.query !== '' && this.props.allBooks !== undefined && this.props.allBooks.length >= 0) && (
                    <div>
                        <h2>Displaying <span>{this.props.allBooks.length} </span>search results for<span> "{this.state.query}"</span></h2>
                    </div>)
                }

                {this.state.query === '' &&
                    (<div>
                        <br/>
                        <span>Type some text into the search input to begin...</span>
                    </div>)
                }
                <div className="container">
                {(this.state.query !== '' && this.props.allBooks !== undefined && this.props.allBooks.length >= 0) && (
                    this.props.allBooks
                    .map((book) => (
                        <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                    ))
                )}
                </div>
            </div>
        )
    }
}
export default SearchForBooks;