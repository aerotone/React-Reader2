import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import ShelfChangeButton from './ShelfChangeButton';

class SingleBook extends Component{
    
    handleClick = (id, shelf) => {
        this.props.onMoveBook(id, shelf)
    }
    handleAddClick = (bookInfo, shelf) => {
        this.props.onAddBook(bookInfo, shelf)
    }
    render() {
        return(
            <Card>
            <CardImg top width="100%" src={this.props.bookInfo.imageLinks.smallThumbnail} alt="Card image cap" />
            <CardBlock>
                <CardTitle>{this.props.bookInfo.title}</CardTitle>
                <CardSubtitle>
                    { this.props.bookInfo.authors && (
                        <SingleAuthor authors={this.props.bookInfo.authors}/>
                    )}
                </CardSubtitle>
                <CardText></CardText>
                <Button className="primary" onClick={() => this.handleClick(this.props.bookInfo.id, 'currentlyReading')} >Move to Current</Button>
                <Button className="primary" onClick={() => this.handleAddClick(this.props.bookInfo, 'currentlyReading')} >Add</Button>
            </CardBlock>
        </Card>
        )
    }
}

function SingleAuthor(props){
    let oneAuthor = props.authors[0];
    return(
         <span>{oneAuthor}</span>
    );
}

export default SingleBook