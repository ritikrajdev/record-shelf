import PropTypes from 'prop-types';
import React from 'react';
import IconButton from '../IconButton';

import './Record.css';

import heartGray from '../../../assets/icons/heart-gray.svg';
import heartRed from '../../../assets/icons/heart-red.svg';

export default function Record({ recordData, onLikeClick }) {
  return (
    <div className='record'>
      <div className='record-img-container'>
        <img className='record-img' src={recordData.imageUrl} alt='image' />
      </div>
      <div className='record-info'>
        <div>
          <div className='record-name'>{recordData.name}</div>
          <div className='record-artist'>{recordData.artist}</div>
        </div>

        <IconButton
          color='white'
          iconSrc={recordData.isLiked ? heartRed : heartGray}
          width='3rem'
          height='3rem'
          onClick={onLikeClick}
        >
          {recordData.numLikes}
        </IconButton>
      </div>
    </div>
  );
}

Record.propTypes = {
  recordData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    numLikes: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }),
  onLikeClick: PropTypes.func,
};
