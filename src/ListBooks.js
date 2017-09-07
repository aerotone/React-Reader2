import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import SingleBook from './SingleBook';

class ListBooks extends Component {
    render(){
        return(
               <div>
                   <br/>
                   <Row>
                        <Link to="/Search">Search for More Books</Link>
                    </Row>
                   <Row>
                    <h2>Currently Reading</h2>
                   </Row>
                   <Row>
                    {this.props.shelfBooks
                    .filter((book) => book.shelf === 'currentlyReading')
                    .map((book) => (
                        <Col sm="3" key={book.id}>
                            <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                        </Col>
                    ))}
                    </Row>
                    <Row>
                        <h2>Want to Read</h2>
                    </Row>
                    <Row>
                    {this.props.shelfBooks
                    .filter((book) => book.shelf === 'wantToRead')
                    .map((book) => (
                        <Col sm="3" key={book.id}>
                            <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                        </Col>
                    ))}
                    </Row>
                    <Row>
                        <h2>Have Read</h2>
                    </Row>
                    <Row>
                    {this.props.shelfBooks
                    .filter((book) => book.shelf === 'read')
                    .map((book) => (
                        <Col sm="3" key={book.id}>
                            <SingleBook onMoveBook={this.props.onMoveBook} bookInfo={book} shelfBooks={this.props.shelfBooks}/>
                        </Col>
                    ))}
                    </Row>
                 </div>
        )
    }
}

export default ListBooks