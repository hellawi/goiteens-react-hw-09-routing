import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieReviewsPage() {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios.get(`movie/${movieId}/reviews?language=en-US`).then((res) => setReviews(res.data.results))
  }, [movieId])
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} style={{fontSize: 20, marginBottom: 20, marginTop: 10, marginLeft: 10}}>
            {review.author}
            <br />
            {review.content}
            <br />
            Published {review.created_at}
          </li>
        ))}
        {reviews.length === 0 && <span style={{ color: 'red', fontSize: 20}}>No reviews for {movieId}!</span>}
      </ul>
    </div>
  )
}

export default MovieReviewsPage