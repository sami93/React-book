import React from 'react';
import { css } from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import {
  postsFetchData,
  addToCart,
} from '../../store/actions/data_action';
import selectImageById from '../../store/selectors/selectImageById';

const goToDetailPicture = (bookItem, history) => {
  history.push({
    pathname: `/image/${bookItem.isbn}`,
  });
};


const BookItem = props => {
  let { history } = props;
  return props.bookItem ? (
    <span className={css(container)}>
      <img
        className={css(styleImg)}
        alt=""
        src={props.bookItem.cover}
        onClick={() => {
          goToDetailPicture(props.bookItem, history);
        }}
      />
      <div className={css(favBlock)}>
        <FontAwesomeIcon
          onClick={() => {
            props.addToCart(props.fieldData.books, props.bookItem.isbn);
          }}
          icon={faCartPlus}
          color={props.bookItem.cart > 0 ? 'red' : 'grey'}
          size="lg"
        />
      </div>{' '}
    </span>
  ) : (
    ''
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.bookItem.isbn;
  const getBookDetail = selectImageById(state.fieldData.books, id);
  return {
    fieldData: state.fieldData,
    getBookDetail: getBookDetail,
  };
};

export default connect(
  mapStateToProps,
  { postsFetchData, addToCart }
)(BookItem);

const styleImg = {
  padding: '25px',
  margin: '30px 0px',
  width: '275px',
  height: '275px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

const container = {
  position: 'relative',
};



const favBlock = {
  position: 'absolute',
  cursor: 'pointer',
  bottom: '20px',
  left: '20px',
};

