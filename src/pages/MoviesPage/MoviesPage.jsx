import React, { useEffect, useState } from "react";
import "../../config/axios.config";
import { Link, useSearchParams } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import { searchMovieService } from "../../services/moviesService";
import SearchBar from "../../components/SearchBar/SearchBar";
import ReactPaginate from "react-paginate";
import styles from './MoviesPage.module.css'


function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    page: 1,
  });
  const [totalPages, setTotalPages] = useState(0);
  const initPage = searchParams.get("page") - 1;

  useEffect(() => {
    setLoading(true);
    searchMovieService(searchParams.get("query"), searchParams.get("page"))
      .then((res) => {
        setMovies(res.results);
        setTotalPages(res.total_pages);
      })
      .finally(() => setLoading(false));
    // axios.get('trending/all/day?language=en-US').then((res) => setMovies(res.data.results)).finally(() => setLoading(false))
  }, [searchParams]);

  function handleSearch(newQuery) {
    setSearchParams({
      query: newQuery,
      page: searchParams.get("page"),
    });
  }

  function handlePage({ selected }) {
    setSearchParams({
      page: selected + 1,
      query: searchParams.get("query"),
    });
  }
  return (
    <div>
      {loading && <Vortex />}
      <h1>Movies</h1>
      <SearchBar
        onSearch={handleSearch}
        defaultValue={searchParams.get("query")}
      />
      {movies.length != 0 && (
        <span>Search results for: {searchParams.get("query")}</span>
      )}
      {movies.length === 0 && <span className="no-results">No results found!</span>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_name}</Link>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>

      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePage}
        initialPage={initPage > totalPages - 1 ? undefined : initPage}
        containerClassName={styles['pagination']}
        pageClassName={styles['page-item']}
        activeClassName={styles['active-paginate']}
      />
    </div>
  );
}

export default MoviesPage;
