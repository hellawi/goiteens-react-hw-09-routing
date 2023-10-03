import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieCastPage() {
    const { movieId } = useParams()
    const [cast, setCast] = useState([])
    useEffect(() => {
        axios.get(`movie/${movieId}/credits?language=en-US`).then((res) => setCast(res.data.cast))
    }, [movieId])
  return (
    <div>
        {cast.map((actor) => (
            <li key={actor.id} style={{fontSize: 20, marginBottom: 20, marginTop: 10, marginLeft: 10}}>
                In film: {actor.character}
                <br />
                Original name: {actor.original_name}
                <br />
                Popularity: {actor.popularity}
            </li>
        ))}
    </div>
  )
}

export default MovieCastPage