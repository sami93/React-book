import React from 'react';
import { css } from 'emotion';

const Ingredient = props => {
  return (
    <div>
      <img
        className={css(styleImg)}
        alt=""
        src="https://source.unsplash.com/collection/1163637/480x480"
      />
      <p>{props.ingredientItem}</p>
    </div>
  );
};

export default Ingredient;

const styleImg = {
  borderRadius: '50%',
  width: '50',
  height: '50px',
  cursor: 'pointer',
};
