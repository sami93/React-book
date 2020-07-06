import * as actionTypes from '../actions/actionTypes';

const initialState = {
  recipes: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        recipes: action.payload,
      };
    case actionTypes.CHANGE_FAVORI:
      return {
        ...state,
        recipes: action.payload,
      };
    case actionTypes.CHANGE_RATING:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
