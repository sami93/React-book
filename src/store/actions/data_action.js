import * as types from './actionTypes';
import { getBook } from '../../utils/utils';
// import React from "react";

export const postsFetchData = () => dispatch => {
  return getBook().then(res => {
    const books = res.data
    dispatch({ type: types.LOADING_POSTS, payload: books });
  });
};

export const addToCart = (books, id) => dispatch => {
  if (id === undefined) return null;
  const booksList = books.map(element => {
    const elementBook = { ...element };
    if (elementBook.isbn === id) {
      elementBook.cart = elementBook.cart > 0 ? 0 : 1;
    }
    return elementBook;
  });

  dispatch({ type: types.ADD_TO_CART, payload: booksList });
};
