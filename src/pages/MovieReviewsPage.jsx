import axios from "axios";
import React, { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { useParams } from "react-router-dom";

function MovieReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`movie/${movieId}/reviews?language=en-US`)
      .then((res) => setReviews(res.data.results))
      .finally(() => setLoading(false));
  }, [movieId]);
  return (
    <div>
      {loading && <Vortex />}
      {reviews.length === 0 && (
        <span style={{ color: "red", fontSize: 20 }}>
          No reviews for {movieId}!
        </span>
      )}
      {reviews.length !== 0 && (
        <ul>
          {reviews.map((review) => (
            <li
              key={review.id}
              style={{
                fontSize: 20,
                marginBottom: 20,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              {review.author}
              <br />
              {review.content}
              <br />
              Published {review.created_at}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieReviewsPage;
