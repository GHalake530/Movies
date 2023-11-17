import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

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

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft =slider.scrollLeft +500;
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft =slider.scrollLeft -500;
  }

  const handleLikeToggle = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].like = !updatedMovies[index].like;
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronRight 
        onClick={slideLeft}
        size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden  group-hover:block'/>
        <div id={'slider' + rowID} className='relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, index) => (
            <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:2-[2800px] inline-block cursor-pointer relative p-2'>
              <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
              <div className='overlay absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'> 
                <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                <p>
                  {item.like ? (
                    <FaHeart className='absolute top-4 left-4 text-gray-300'onClick={() => handleLikeToggle(index)}/>) : (
                    <FaRegHeart className='absolute top-4 left-4 text-gray-300' onClick={() => handleLikeToggle(index)}/>)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronLeft 
        onClick={slideRight}
        size={40} className='bg-white left-2 rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block'/>
      </div>
    </div>
  );
}

export default Row; 
