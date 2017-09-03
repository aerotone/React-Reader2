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
  handleAddClick = (bookInfo, shelf) => {
    this.props.onAddBook(bookInfo, shelf)
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm">
        <DropdownToggle caret>
          Change Shelf
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'wantToRead')}>Want to Read</DropdownItem>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'currentlyReading')}>Currently Reading</DropdownItem>
          <DropdownItem onClick={() => this.handleMoveClick(this.props.bookInfo, 'read')}>Already Read</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default ShelfChangeButton