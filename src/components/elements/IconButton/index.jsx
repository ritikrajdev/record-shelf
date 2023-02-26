import PropTypes from 'prop-types';
import React from 'react';

import './IconButton.css';

export default function IconButton({
  children,
  iconSrc,
  onClick,
  width,
  height,
  color,
}) {
  return (
    <button
      className='icon-button'
      onClick={onClick}
      style={{
        background: `url(${iconSrc}) no-repeat center center`,
        backgroundSize: 'contain',
        width,
        height,
        color,
      }}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  iconSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

IconButton.defaultProps = {
  width: '24px',
  height: '24px',
};
