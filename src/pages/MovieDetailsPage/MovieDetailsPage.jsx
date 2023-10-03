import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import styles from './MovieDetailsPage.module.css'

function MovieDetailsPage() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(`movie/${movieId}?language=en-US`).then((res) => setMovie(res.data))
    }, [movieId])
  return (
    <div>
      <header className={styles['header-details']}>
        <Link to='/movies'>
            <button>Return to movies page</button>
          </Link>
        <span style={{fontSize: 30}}>About film #{movieId}</span>
      </header>  
      {movie && (
        <div className={styles['movie-details-container']}>
          <div>
            <h1 className={styles['movie-title']}>{movie.original_title}</h1>
            {movie.genres.map((genre) => 
            <div className={styles['genre-box']}>
              <span key={genre.id} className={styles['genre']}>{genre.name} </span>
            </div> 
            )}
            <p className={styles['overview']}>{movie.overview}</p>
            <hr />
          </div>
        </div>
      )}
      <div className={styles['add-info-prebox']}>
        <div className={styles['add-info']}>
          <p>Additional information</p>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          <Link to="cast">Cast</Link>
        </div>
      </div>
     
      <Outlet />
    </div>
  )
}

export default MovieDetailsPage