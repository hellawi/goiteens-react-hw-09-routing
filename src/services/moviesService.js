import axios from "axios";

export function searchMovieService(query, page){
  return axios.get("/search/movie", {
    params: {
      query,
      page,
    }
  }).then((res) => res.data)}
