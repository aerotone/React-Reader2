import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
//import { Link } from 'react-router-dom'

class ListBooks extends Component {
    render(){
        return(
               <div>
                   <Row>
                    <h2>Currently Reading</h2>
                   </Row>
                   <Row>
                    {this.props.books
                    .filter((book) => book.shelf === 'currentlyReading')
                    .map((book) => (
                        <Col sm="3" key={book.id}>
                            <Card>
                                <CardImg top width="100%" src={book.imageLinks.smallThumbnail} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>{book.title}</CardTitle>
                                    <CardSubtitle>{book.authors[0]}</CardSubtitle>
                                    <CardText></CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                    <Row>
                        <h2>Want to Read</h2>
                    </Row>
                    <Row>
                    {this.props.books
                    .filter((book) => book.shelf === 'wantToRead')
                    .map((book) => (
                        <Col sm="3" key={book.id}>
                            <Card>
                                <CardImg top width="95%" src={book.imageLinks.smallThumbnail} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>{book.title}</CardTitle>
                                    <CardSubtitle>{book.authors[0]}</CardSubtitle>
                                    <CardText></CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                    <Row>
                        <h2>Have Read</h2>
                    </Row>
                    <Row>
                    {this.props.books
                    .filter((book) => book.shelf === 'read')
                    .map((book) => (
                        <Col sm="3" key={book.id}>
                            <Card>
                                <CardImg top width="95%" src={book.imageLinks.smallThumbnail} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>{book.title}</CardTitle>
                                    <CardSubtitle>{book.authors[0]}</CardSubtitle>
                                    <CardText></CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                 </div>
        )
    }
}

export default ListBooks