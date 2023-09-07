import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

function SharedLayout() {
  return (
    <>
        <Header />
        <Outlet />
    </>

  )
}

export default SharedLayout