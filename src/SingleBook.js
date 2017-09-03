import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import ShelfChangeButton from './ShelfChangeButton';

class SingleBook extends Component{
    
    
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
                <CardText>
                    <ShelfCheck shelfBooks={this.props.shelfBooks} bookInfo={this.props.bookInfo} /> 
                </CardText>
                <ShelfChangeButton onMoveBook={this.props.onMoveBook} bookInfo={this.props.bookInfo}/>
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

function ShelfCheck(props){
    
    for (var i = 0; i < props.shelfBooks.length; i++){
        var item = props.shelfBooks[i].id;
        if (item === props.bookInfo.id){
            return (
            <span>{props.shelfBooks[i].shelf}</span>
            );
        }
    }
    return (<span>none</span>);
}

export default SingleBook