import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderBooks() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      );
    });  
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderBooks()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { selectBook })(BookList);