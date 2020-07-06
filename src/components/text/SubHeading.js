import { css } from 'emotion';
import React from 'react';

const SubHeading = ({ children }) => {
  return <h1 className={css(styles.fontStyle)}>{children}</h1>;
};

const styles = {
  fontStyle: {
    textAlign: 'center',
    color: 'Black',
    margin: '0px 0px',
    fontSize: 'calc(14px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))',
  },
};

export default SubHeading;
