import React, { useState } from 'react';
import IconButton from '../../components/elements/IconButton';
import RoundedButton from '../../components/elements/RoundedButton';

import iconGenre from '../../assets/icons/icon-genre.svg';
import iconGrid from '../../assets/icons/icon-grid.svg';

import { useNavigate, useSearchParams } from 'react-router-dom';
import GenreIcon from '../../components/elements/GenreIcon';
import Record from '../../components/elements/Record';

import {
  GET_ALL_RECORDS,
  GET_LIKES,
  UPDATE_LIKES,
} from '../../constants/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest';
import './HomePage.css';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [groupByGenre, setGroupByGenre] = useState(
    searchParams.get('groupBy') === 'genre'
  );
  const [records, setRecords] = useState(null);

  const navigate = useNavigate();

  const fetchAndUpdateRecords = async () => {
    const recordsDataWithoutLikes = (
      await makeRequest(GET_ALL_RECORDS, {}, navigate)
    ).data;
    const likesResponseData = await Promise.all(
      recordsDataWithoutLikes.map((record) =>
        makeRequest(GET_LIKES(record.id), {}, navigate)
      )
    );
    const likesData = likesResponseData.map((resData) => resData.data);
    const recordsData = recordsDataWithoutLikes.map((record, idx) => ({
      ...record,
      genre: record.genre.name,
      artist: record.artist.name,
      isLiked: likesData[idx].like,
      numLikes: likesData[idx].count,
    }));
    console.log(recordsData);
    setRecords(recordsData);
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

  const toggleLike = async (recordId) => {
    const recordIndex = records.findIndex((record) => record.id === recordId);

    const isLiked = records[recordIndex].isLiked;
    try {
      const likedData = (
        await makeRequest(
          UPDATE_LIKES(recordId, {
            like: !isLiked,
          })
        )
      ).data;

      records[recordIndex].isLiked = likedData.like;
      records[recordIndex].numLikes = likedData.count;
      setRecords([...records]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='container' data-testid='container'>
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
                  <Record
                    key={record.id}
                    recordData={record}
                    onLikeClick={() => toggleLike(record.id)}
                  />
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
            <Record
              key={record.id}
              recordData={record}
              onLikeClick={() => toggleLike(record.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
