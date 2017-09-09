import React from 'react';

class ShelfChangeButton extends React.Component {

  handleMoveClick = (id, shelf, shelfBooks, bookInfo) => {
    this.props.onMoveBook(id, shelf)
  }
  
  shelfCheck(shelfBooks, bookInfo){

    for (var i = 0; i < shelfBooks.length; i++){
        var item = shelfBooks[i].id;
        if (item === bookInfo.id){
                return (
                    shelfBooks[i].shelf
                );
           // }
        }
    }
    return (
        'none'
    );
}

  render() {
    return (
    
    <div className="shelfChangeBtnHolder">
        <select className="selectButton" value={this.shelfCheck(this.props.shelfBooks, this.props.bookInfo)} 
    onChange={(event) => this.props.onMoveBook(this.props.bookInfo, event.target.value, this.props.shelfBooks, this.props.bookInfo)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        </select>
    </div>
    )
  }
}


export default ShelfChangeButton