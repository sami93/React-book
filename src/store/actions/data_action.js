import * as types from './actionTypes';
import getImage from '../../utils/utils';
// import {LIMIT_LIST} from '../../constants';
// import React from "react";

export const postsFetchData = () => dispatch => {
  return getImage().then(res => {
    // const books = res.data.slice(1,LIMIT_LIST).map((item) => {
    const books = res.data.map(item => {
      let elementItem = { ...item };
      elementItem.valueSelected = false;
      // elementItem.rating = 0;
      elementItem.desciption =
        'There are many idiosyncratic typing styles in between novice-style "hunt and peck" and touch typing. For example, many "hunt and peck" typists have the keyboard layout memorized and are able to type while focusing their gaze on the screen. Some use just two fingers, while others use 3-6 fingers. Some use their fingers very consistently, with the same finger being used to type the same character every time, while others vary the way they use their fingers. (Wikipedia)';
      elementItem.ingredients = [
        'ingredientttttttttt 1',
        'ingredient 1',
        'ingredient 1',
      ];
      return elementItem;
    });

    dispatch({ type: types.LOADING_POSTS, payload: books });
  });
};

export const addToCart = (books, id) => dispatch => {
  console.log("books", books, "id", id)
  if (id === undefined) return null;
  const booksList = books.map(element => {
    const elementBook = { ...element };
    if (elementBook.isbn === id) {
      elementBook.cart = elementBook.cart > 0 ? 0 : 1;
    }
    return elementBook;
  });

  dispatch({ type: types.CHANGE_FAVORI, payload: booksList });
};
