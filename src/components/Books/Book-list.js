import React, { Component } from 'react';
import BookItem from './Book-item';
import { css } from 'emotion';
import Heading from '../text/Heading';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { postsFetchData } from '../../store/actions/data_action';
import Pagination from '../ui/pagination';
class BooksList extends Component {
  constructor() {
    super();

    this.state = {
      pageOfItems: [],
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    if (this.props.fieldData.books.length === 0) this.props.postsFetchData();
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    let booksListItems;
    // Parse List Books
    if (this.state.pageOfItems.length > 0) {
      booksListItems = this.state.pageOfItems.map((item, index) => {
        return (
          <BookItem
            key={index}
            bookItem={item}
            history={this.props.history}
          />
        );
      });
    }
    return (
      <React.Fragment>
        <Heading>List of Books</Heading>
        <div
          className={css`
            display: flex;
          `}>
          <div className={css(styles.columnStyle)}>{booksListItems}</div>
        </div>
        {this.props.fieldData.books.length > 0 && (
          <Pagination
            items={this.props.fieldData.books}
            onChangePage={this.onChangePage}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fieldData: state.fieldData,
  };
};


export default withRouter(
  connect(
    mapStateToProps,
    { postsFetchData }
  )(BooksList)
);

const styles = {
  fontStyle: {
    textAlign: 'center',
    color: '#00BFFF',
    margin: '50px 0px',
  },
  columnStyle: {
    flex: '33.33%',
    padding: '5px',
  },
};
