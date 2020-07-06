import React from 'react'; // modify to a component
import { css } from 'emotion';

const Rating = props => {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    let klass = starRatingStar;

    if (props.rating > i && props.rating != null) {
      klass = isSelected;
    }

    stars.push(
      //use map instead of push
      <label
        className={css(klass)}
        onClick={() => {
          if (props.ClickChangeRate) props.ClickChangeRate(i + 1);
        }}
        key={'Rating' + i}>
        ★
      </label>
    );
  }

  return <div>{stars}</div>;
};

export default Rating;

const starRatingStar = {
  display: 'inline-block',
  padding: '3px',
  verticalAlign: 'middle',
  lineHeight: '1',
  fontSize: '15px',
  color: '#ABABAB',
  transition: 'color .2s ease-out',
};

const isSelected = {
  display: 'inline-block',
  padding: '3px',
  verticalAlign: 'middle',
  lineHeight: '1',
  fontSize: '15px',

  color: '#FFD700',
  transition: 'color .2s ease-out',
};
