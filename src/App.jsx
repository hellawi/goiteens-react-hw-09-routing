import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import SharedLayout from './layouts/SharedLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ShowReviewsPage from './pages/MovieReviewsPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import MovieReviewsPage from './pages/MovieReviewsPage'
import MovieCastPage from './pages/MovieCastPage'

function App() {
  return (
    <Routes>
      {/* layout rote */}
      <Route element={<SharedLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='reviews' element={<MovieReviewsPage />}/>
          <Route path='cast' element={<MovieCastPage />}/>
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/error404' replace />}/>
      <Route path='/error404' element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App