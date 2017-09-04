import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ShelfChangeButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  handleMoveClick = (id, shelf) => {
    this.props.onMoveBook(id, shelf)
  }
  
  shelfCheck(shelfBooks, bookInfo, optionID){

    for (var i = 0; i < shelfBooks.length; i++){
        var item = shelfBooks[i].id;
        if (item === bookInfo.id){
            if (shelfBooks[i].shelf === optionID){
                return (
                    <i className="fa fa-check" aria-hidden="true"></i>
                );
            }
        }
    }
    return (
        <i className="fa fa-square-o" aria-hidden="true"></i>
    );

}

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm">
        <DropdownToggle caret>
          Change Shelf
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'wantToRead')}>{this.shelfCheck(this.props.shelfBooks,this.props.bookInfo, 'wantToRead')} Want to Read</DropdownItem>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'currentlyReading')}>{this.shelfCheck(this.props.shelfBooks,this.props.bookInfo, 'currentlyReading')} Currently Reading</DropdownItem>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'read')}>{this.shelfCheck(this.props.shelfBooks,this.props.bookInfo, 'read')} Read</DropdownItem>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'none')}>{this.shelfCheck(this.props.shelfBooks,this.props.bookInfo, 'none')} None</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}


export default ShelfChangeButton