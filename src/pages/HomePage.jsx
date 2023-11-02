import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import axios from 'axios'

function HomePage() {
  const [moviesTrending, setMoviesTrending] = useState([])
  useEffect(() => {
    axios.get('trending/all/day?language=en-US').then((res) => setMoviesTrending(res.data.results))
  }, [])
  return (
    <div>
      <header className='home-header'>
        <img src="/favicon.jpeg" alt="" />
        <p className='home-title'>TRENDING RIGHT NOW</p>
      </header> 
      <main>
        {moviesTrending.map((movie) => (
          <li key={movie.id} className='main-trending'>
            {movie.original_name}
            {movie.original_title}
          </li>
        ))}
      </main>
    </div>
  )
}

export default HomePage