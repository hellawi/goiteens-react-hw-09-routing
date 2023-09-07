import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import SharedLayout from './layouts/SharedLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <Routes>
      {/* layout rote */}
      <Route element={<SharedLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/error404' replace />}/>
      <Route path='/error404' element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App