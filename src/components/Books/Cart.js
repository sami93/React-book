import React, { Component, Fragment } from 'react';
import Heading from '../text/Heading';

import { connect } from 'react-redux';
import { postsFetchData } from '../../store/actions/data_action';
import calculBooksOnCart from '../../store/selectors/calculBooksOnCart';
import { getBook } from '../../utils/utils';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      minus: 0,
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
      let ids = ''
      let totalPrice = 0
      booksOnCart.forEach((book, index) => {
        // if first element don't add comma
        if (index > 0 )
          ids += ','
        
        ids += book.isbn
        totalPrice += book.price
      })
      getBook(`${ids}/commercialOffers`).then((res) => {
        const result = res.data.offers
        let minus = 0, sliceValue = 0, reimbursment = 0
        if (result && result.length > 1) {
          // minus
          minus =  result[1].value
          //slice
          sliceValue = result[2].sliceValue
          reimbursment = result[2].value
        }
        this.setState({
          price: totalPrice,
          minus,
          sliceValue,
          reimbursment
        })
      })
      .catch((error) => console.error(error))
    }
  }


  render() {
    const {booksOnCart} = this.props
    const { price, minus, sliceValue, reimbursment } = this.state
    const totalPrice = price - minus
    return Boolean(booksOnCart) && Boolean(booksOnCart.length)
      && (
      <Fragment>
        <Heading>Panier: {`${booksOnCart.length} book${booksOnCart.length > 1 ? 's' : ''}`}
        <br />
        { Boolean(price && price !== totalPrice) && <p> Prix sans réduction  = {price} €</p>}
        {' '}
        { Boolean(minus) && <p> Réduction  = {minus} €</p>}
        {' '}
        { Boolean(totalPrice) && <p> Prix Total = {price - minus} €</p>}
        {' '}
        { Boolean(sliceValue) && <p> Bon d'achat  = {sliceValue} €</p>}
        {' '}
        { Boolean(reimbursment) && <p> Remboursement  = {reimbursment} €</p>}
        </Heading>
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


export default connect(
    mapStateToProps,
    { postsFetchData }
  )(Cart)

