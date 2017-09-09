import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChangeButton from './ShelfChangeButton';

class SingleBook extends Component{
    static PropTypes = {
        bookInfo: PropTypes.array.isRequired,
    }
    render() {
        return(
            <div className="card">
                <img src={this.props.bookInfo.imageLinks.thumbnail} alt='book'/>
                <div className="bookData">
                    <p className='titleText'>{this.props.bookInfo.title}</p>
                    <p className='authorText'>{ this.props.bookInfo.authors && (
                            <SingleAuthor authors={this.props.bookInfo.authors}/>
                        )}
                    </p>
                    <ShelfChangeButton shelfBooks={this.props.shelfBooks} onMoveBook={this.props.onMoveBook} bookInfo={this.props.bookInfo}/>
                </div>
            </div>
        )
    }
}

function SingleAuthor(props){

    let oneAuthor = props.authors[0];
    return(
         <span className="singleAuthorCS">{oneAuthor}</span>
    );

}

export default SingleBook