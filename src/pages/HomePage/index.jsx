import React, { useState } from 'react';
import IconButton from '../../components/elements/IconButton';
import RoundedButton from '../../components/elements/RoundedButton';
import { mockRecordsData } from '../../mocks/records';

import iconGenre from '../../assets/icons/icon-genre.svg';

import Record from '../../components/elements/Record';
import './HomePage.css';

export default function HomePage() {
  const [records, setRecords] = useState(null);

  const fetchAndUpdateRecords = async () => {
    setRecords(mockRecordsData);
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

  return (
    <div className='container'>
      <div className='container-bar'>
        <h2 className='container-heading'>all songs</h2>
        <IconButton iconSrc={iconGenre} width='2.5rem' height='2.5rem' />
      </div>

      <div className='records'>
        {records.map((record) => (
          <Record key={record.id} recordData={record} />
        ))}
      </div>
    </div>
  );
}
