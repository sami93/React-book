import * as actionTypes from '../actions/actionTypes';

const initialState = {
  books: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        books: action.payload,
      };
    case actionTypes.CHANGE_FAVORI:
      return {
        ...state,
        books: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
