import { css } from 'emotion';
import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Ingredients extends Component {
  render() {
    const IngredientsList = this.props.ingredients.map(
      (ingredientItem, index) => {
        return (
          <Ingredient
            key={'Ingredient ' + index}
            ingredientItem={ingredientItem}
          />
        );
      }
    );

    return (
      <div className={css(card)}>
        <div className={css(container)}>{IngredientsList}</div>
      </div>
    );
  }
}

export default Ingredients;

const container = {
  display: 'grid',
  gridTemplateColumns: '200px 500px ',
  gridGap: '20px',
  textAlign: 'center',
};

const card = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3',
  marginLeft: '20px',
  marginRight: '20px',
};
