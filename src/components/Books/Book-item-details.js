import React, { Component } from 'react';
import { css } from 'emotion';
import SubHeading from '../text/SubHeading';

import { connect } from 'react-redux';
import {
  postsFetchData,
  addToCart,
} from '../../store/actions/data_action';
import selectImageById from '../../store/selectors/selectImageById';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Helper from '../ui/helper';
class BookItemDetail extends Component {
  componentDidMount() {
    if (this.props.fieldData.books.length === 0) this.props.postsFetchData();
  }


  goBack() {
    this.props.history.push('/');
  }

  render() {
    if (!this.props.getBookDetail) return null; //spinner loading
    // info book
    const { title, synopsis } = this.props.getBookDetail;
    return (
      <span className={css(styles.bookWrapper)}>
        <div className={css(styles.container)}>
          <div className={css(styles.card)}>
            <button type="button" onClick={this.goBack.bind(this)}>
              Return
            </button>
            <SubHeading>
              <Helper text={title} helper={<p>This is the book name</p>} />
            </SubHeading>

            <div className={css(styles.container1)}>
              <h1 className={css(h1)}> {title} </h1>
              <img
                className={css(styles.imgStyle)}
                src={this.props.getBookDetail.cover}
                alt=""
              />
            </div>

            <div className={css(styles.container2)}>
              <FontAwesomeIcon
                onClick={() => {
                  this.props.addToCart(
                    this.props.fieldData.books,
                    this.props.match.params.id
                  );
                }}
                icon={faCartPlus}
                color={
                  this.props.getBookDetail.cart > 0 ? 'red' : 'grey'
                }
                size="3x"
              />
            </div>
            <div className={css(styles.card)}>
              {synopsis && synopsis.length && synopsis.map(description => <p>{ description}</p>)}
            </div>
          </div>
        </div>
      </span>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  const getBookDetail = selectImageById(state.fieldData.books, id);

  return {
    fieldData: state.fieldData,
    getBookDetail,
  };
};


export default connect(
  mapStateToProps,
  { postsFetchData, addToCart }
)(BookItemDetail);


const styles = {
  bookWrapper: {
    overflow: 'auto',
    marginLeft: '10px 50px 10px 150px',
    marginRight: '10px 50px 10px 150px',
    padding: '10px 50px 10px 150px',
  },
  infoWrapper: {
    margin: '10px 50px 10px 150px',
    padding: '10px 50px 10px 150px',
  },
  columnStyle: {
    flex: '33.33%',
    padding: '5px',
  },
  imgStyle: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '100%',
  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3',
    marginLeft: '20px',
    marginRight: '20px',
  },
  container: {
    position: 'relative',
  },
  favBlock: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  favBlock1: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
  },
  container1: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  container2: {
    bottom: '100px',
    cursor: 'pointer',
    left: '25px',
  },
  over1: {
    position: 'relative',
    top: '0',
    left: '0',
  },
  // over2 : {
  //     position: 'absolute',
  //     top: '60px',
  //     left: '80px'
  // },
  //    divv : {
  //         position: 'relative',
  //         left: '0',
  //         top: '0'
  // }
};

const h1 = {
  position: 'absolute',
  top: '200px',
  left: '0',
  width: '100%',
};
