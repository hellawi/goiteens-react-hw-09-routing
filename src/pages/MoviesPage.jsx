import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import '../config/axios.config'
import axios from 'axios'
import { Link } from 'react-router-dom'

function MoviesPage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('trending/all/day?language=en-US').then((res) => setMovies(res.data.results))
  }, [])
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_name}</Link>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
        {/* <li>Movie 1</li>
        <li>Movie 2</li>
        <li>Movie 3</li>
        <li>Movie 4</li>
        <li>Movie 5</li> */}
      </ul>
    </div>
  )
}

export default MoviesPage