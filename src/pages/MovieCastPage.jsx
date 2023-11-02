import axios from "axios";
import React, { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { useParams } from "react-router-dom";

function MovieCastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`movie/${movieId}/credits?language=en-US`)
      .then((res) => setCast(res.data.cast))
      .finally(() => setLoading(false));
  }, [movieId]);
  return (
    <div>
      {loading && <Vortex />}
      {cast.length === 0 && (
        <span style={{ color: "red" }}>No reviews found!</span>
      )}
      {cast.length !== 0 && (
        <ul>
          {cast.map((actor) => (
            <li
              key={actor.id}
              style={{
                fontSize: 20,
                marginBottom: 20,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              In film: {actor.character}
              <br />
              Original name: {actor.original_name}
              <br />
              Popularity: {actor.popularity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieCastPage;