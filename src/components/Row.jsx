import React, { useEffect, useState } from 'react';
import { FaHeart,FaRegHeart } from 'react-icons/fa';


function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false)

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [fetchURL]);

  console.log(movies);

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {movies.map((item, index) => (
            <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:2-[2800px] inline-block cursor-pointer relative p-2'>
              <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
              <div className='overlay absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'> 
                <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                <p>
                    {like ? <FaHeart className='absolute top-4 l-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;