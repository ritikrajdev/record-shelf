import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RoundedButton from '../RoundedButton';

import defaultGenereIcon from '../../../assets/images/genre-pop.png';

import './GenreIcon.css';

export default function GenreIcon({ genre }) {
  const [genreIcon, setGenreIcon] = useState(defaultGenereIcon);

  useEffect(() => {
    import(`../../../assets/images/genre-${genre}.png`)
      .then((module) => setGenreIcon(module.default))
      .catch(console.error);
  });

  return (
    <div className='genre-icon'>
      <img src={genreIcon} alt={genre} />
      <div>
        <RoundedButton>{genre}</RoundedButton>
      </div>
    </div>
  );
}

GenreIcon.propTypes = {
  genre: PropTypes.string,
};
