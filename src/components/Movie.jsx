import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ item, onLikeToggle }) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:2-[2800px] inline-block cursor-pointer relative p-2'>
      <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
      <div className='overlay absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        <p>
          {item.like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' onClick={() => onLikeToggle(item.id)} />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' onClick={() => onLikeToggle(item.id)} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
