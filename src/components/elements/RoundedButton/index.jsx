import PropTypes from 'prop-types';
import React from 'react';

import './RoundedButton.css';

export default function RoundedButton({ children, onClick, style }) {
  return (
    <button className='rounded-button' style={style} onClick={onClick}>
      {children}
    </button>
  );
}

RoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

RoundedButton.defaultProps = {
  children: '',
};
