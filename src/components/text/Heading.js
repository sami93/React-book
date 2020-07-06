import { css } from 'emotion';
import React from 'react';

const styles = {
  fontStyle: {
    textAlign: 'center',
    color: '#00BFFF',
    margin: '50px 0px',
  },
};

const Heading = ({ children }) => {
  return <h1 className={css(styles.fontStyle)}>{children}</h1>;
};

export default Heading;
