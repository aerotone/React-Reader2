import React, { Component } from 'react'
import { Card, CardImg, CardBlock,
    CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types'
import ShelfChangeButton from './ShelfChangeButton';

class SingleBook extends Component{
    static PropTypes = {
        bookInfo: PropTypes.array.isRequired,
    }
    render() {
        return(
            <Card>
                <CardImg top width="100%" height="100%" src={this.props.bookInfo.imageLinks.smallThumbnail} alt="Card image cap" />
                <CardBlock>
                    <CardTitle>{this.props.bookInfo.title}</CardTitle>
                    <CardSubtitle>
                        { this.props.bookInfo.authors && (
                            <SingleAuthor authors={this.props.bookInfo.authors}/>
                        )}
                    </CardSubtitle>
                    <ShelfChangeButton shelfBooks={this.props.shelfBooks} onMoveBook={this.props.onMoveBook} bookInfo={this.props.bookInfo}/>
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