import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({obj}) {
  const {title , poster_path , overview , release_data ,id } = obj
  return (
    <Link id={id} to={`/single-page/${id}`} className='w-[300px] mt-5 p-2 flex cursor-pointer  flex-col space-y-3 rounded-md bg-red-400 text-white'>
        <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="Card Img" width={'100%'} height='70'  />
        <h2>{title}</h2>
        <p className='whitespace-nowrap text-ellipsis overflow-hidden '>{overview}</p>   
        <p>{release_data}</p>
        <button className='bg-blue-300 text-white p-2 rounded-md hover:opacity-70'>More</button>
    </Link>
  )
}

export default MovieCard