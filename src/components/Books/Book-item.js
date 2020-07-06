import React from 'react';
import { css } from 'emotion';
import calculateUrl from '../../utils/calculUrl';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Rating from '../ui/rating2';

import { connect } from 'react-redux';
import {
  postsFetchData,
  ChangeFavori,
  ChangeRating,
} from '../../store/actions/data_action';
import selectImageById from '../../store/selectors/selectImageById';

const goToDetailPicture = (bookItem, history) => {
  history.push({
    pathname: `/image/${bookItem.isbn}`,
    // search: '?id=' + this.bookItem.id,
  });
};

const onStarChangeRate = (props, nextRate) => {
  props.ChangeRating(props.fieldData.books, props.bookItem.isbn, nextRate);
};

const RecipeItem = props => {
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
      {/* <div className={css(favBlock)}>
        <Rating
          classeName={css(star)}
          rating={
            typeof props.getBookDetail.rating === 'undefined'
              ? 0
              : props.getBookDetail.rating
          }
          ClickChangeRate={nextRate => {
            onStarChangeRate(props, nextRate);
          }}
        />
      </div> */}
      {/* <div className={css(favBlock1)}>
        <FontAwesomeIcon
          onClick={() => {
            props.ChangeFavori(props.fieldData.books, props.bookItem.id);
          }}
          icon={faHeart}
          color={props.bookItem.favorites > 0 ? 'red' : 'grey'}
          size="sm"
        />
      </div>{' '} */}
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
  { postsFetchData, ChangeFavori, ChangeRating }
)(RecipeItem);

const styleImg = {
  padding: '25px',
  margin: '30px 0px',
  width: '275px',
  height: '275px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};
// const card = {
//     boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//     transition: '0.3'
// };

const container = {
  position: 'relative',
};

const favBlock = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

const favBlock1 = {
  position: 'absolute',
  bottom: '20px',
  left: '20px',
};

const star = {
  size: '20px',
};
