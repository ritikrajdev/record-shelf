import React, { useState } from 'react';
import IconButton from '../../components/elements/IconButton';
import RoundedButton from '../../components/elements/RoundedButton';
import { mockRecordsData } from '../../mocks/records';

import iconGenre from '../../assets/icons/icon-genre.svg';
import iconGrid from '../../assets/icons/icon-grid.svg';

import { useSearchParams } from 'react-router-dom';
import GenreIcon from '../../components/elements/GenreIcon';
import Record from '../../components/elements/Record';

import './HomePage.css';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [groupByGenre, setGroupByGenre] = useState(
    searchParams.get('groupBy') === 'genre'
  );
  const [records, setRecords] = useState(null);

  const fetchAndUpdateRecords = async () => {
    setRecords(mockRecordsData);
  };

  const toggleGroupBy = () => {
    if (groupByGenre) {
      setSearchParams({});
    } else {
      setSearchParams({ groupBy: 'genre' });
    }

    setGroupByGenre(!groupByGenre);
  };

  if (records === null) {
    return (
      <div className='sync-screen'>
        <p>{':(('}</p>
        <p>seems a bit empty here ...</p>
        <RoundedButton onClick={fetchAndUpdateRecords}>Sync</RoundedButton>
      </div>
    );
  }

  const groupedRecords = {};
  if (groupByGenre) {
    records.forEach((record) => {
      groupedRecords[record.genre] = groupedRecords[record.genre] ?? [];
      groupedRecords[record.genre].push(record);
    });
  }

  return (
    <div className='container'>
      <div className='container-bar'>
        <h2 className='container-heading'>all songs</h2>
        <IconButton
          onClick={toggleGroupBy}
          iconSrc={groupByGenre ? iconGrid : iconGenre}
          width='2.5rem'
          height='2.5rem'
        />
      </div>

      {groupByGenre ? (
        Object.entries(groupedRecords).map(([genre, genreRecords], index) => {
          return (
            <div key={index}>
              <GenreIcon genre={genre.toLowerCase()} />
              <br />
              <div className='records'>
                {genreRecords.map((record) => (
                  <Record key={record.id} recordData={record} />
                ))}
              </div>
              <br />
              <br />
            </div>
          );
        })
      ) : (
        <div className='records'>
          {records.map((record) => (
            <Record key={record.id} recordData={record} />
          ))}
        </div>
      )}
    </div>
  );
}
