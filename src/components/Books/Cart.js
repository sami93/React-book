import React, { Component, Fragment } from 'react';
import Heading from '../text/Heading';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { postsFetchData } from '../../store/actions/data_action';
import calculBooksOnCart from '../../store/selectors/calculBooksOnCart';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPrice: 0,
      discountPrice: 0,
      sliceValue: 0,
      reimbursment: 0,
    }
  }
  componentDidMount() {
    if (this.props.fieldData.books.length === 0) this.props.postsFetchData();
  }

  componentDidUpdate(prevProps){
    const {booksOnCart} = this.props
    if (booksOnCart && booksOnCart &&prevProps.booksOnCart.length !== booksOnCart.length){

      console.log("samiiii")
    }
  }


  render() {
    const {booksOnCart} = this.props
    return Boolean(booksOnCart) && Boolean(booksOnCart.length)
      && (
      <Fragment>
        <Heading>Panier: {`${booksOnCart.length} book${booksOnCart.length > 1 ? 's' : ''}`}</Heading>

      </Fragment>
      )
}
}

const mapStateToProps = state => {
  const booksOnCart = calculBooksOnCart(state.fieldData.books)
  return {
    fieldData: state.fieldData,
    booksOnCart
  };
};


export default withRouter(
  connect(
    mapStateToProps,
    { postsFetchData }
  )(Cart)
);

