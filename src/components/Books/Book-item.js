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

const goToDetailPicture = (itemRecipe, history) => {
  history.push({
    pathname: `/image/${itemRecipe.id}`,
    // search: '?id=' + this.itemRecipe.id,
  });
};

const onStarChangeRate = (props, nextRate) => {
  props.ChangeRating(props.fieldData.recipes, props.itemRecipe.id, nextRate);
};

const RecipeItem = props => {
  let { history } = props;
  return props.itemRecipe ? (
    <span className={css(container)}>
      <img
        className={css(styleImg)}
        alt=""
        src={props.itemRecipe.image}
        onClick={() => {
          goToDetailPicture(props.itemRecipe, history);
        }}
      />
      <div className={css(favBlock)}>
        <Rating
          classeName={css(star)}
          rating={
            typeof props.getRecipeDetail.rating === 'undefined'
              ? 0
              : props.getRecipeDetail.rating
          }
          ClickChangeRate={nextRate => {
            onStarChangeRate(props, nextRate);
          }}
        />
      </div>
      <div className={css(favBlock1)}>
        <FontAwesomeIcon
          onClick={() => {
            props.ChangeFavori(props.fieldData.recipes, props.itemRecipe.id);
          }}
          icon={faHeart}
          color={props.itemRecipe.favorites > 0 ? 'red' : 'grey'}
          size="sm"
        />
      </div>{' '}
    </span>
  ) : (
    ''
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.itemRecipe.id;
  const getRecipeDetail = selectImageById(state.fieldData.recipes, id);
  return {
    fieldData: state.fieldData,
    getRecipeDetail: getRecipeDetail,
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
