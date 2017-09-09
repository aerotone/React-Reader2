import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from './SingleBook';

class ListBooks extends Component {
    render(){
        return(
               <div >
                   <br/>
                    <Link className='navLink_Search' to="/Search">Search for More Books</Link>
                    <h2>Currently Reading</h2>
                    <div className="container">
                    {this.props.shelfBooks
                    .filter((book) => book.shelf === 'currentlyReading')
                    .map((book) => (
                        <div key={book.id}>
                            <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                        </div>
                    ))}
                   </div>
                        <h2>Want to Read</h2>
                    <div className="container">
                    {this.props.shelfBooks
                    .filter((book) => book.shelf === 'wantToRead')
                    .map((book) => (
                        <div key={book.id}>
                            <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                        </div>
                    ))}
                    </div>
                        <h2>Have Read</h2>
                    <div className="container">
                    {this.props.shelfBooks
                    .filter((book) => book.shelf === 'read')
                    .map((book) => (
                        <div key={book.id}>
                            <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                        </div>
                    ))}
                   </div>
                 </div>
        )
    }
}

export default ListBooks