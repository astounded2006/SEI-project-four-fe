import React, { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './common/LandingPage'
import Register from './auth/Register'
import Navbar from './common/Navbar'
import Login from './auth/Login'
import Footer from './common/FooterFiles/Footer'
import About from './common/FooterFiles/About'
import Tallinn from './common/FooterFiles/Tallinn'
import VenuesPage from './common/venues/Venues'
import ShowVenues from './common/venues/ShowVenue'
import Profile from './common/Profile'


function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/venues')
      console.log(res.data)
    }
    getData()
  })

  const [isAuth, setIsAuth] = useState(false)

  return (
    <BrowserRouter>
      <Navbar
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
      <Routes>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login setIsAuth={setIsAuth} />
        </Route>
        <Route exact path="/venues/:venueId">
          <ShowVenues />
        </Route>
        <Route exact path="/venues">
          <VenuesPage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/tallinn" >
          <Tallinn />
        </Route>
      </Routes>
      <Footer />
      <Link to="/about" />
      <Link to="/tallinn" />
    </BrowserRouter>
  )
}
export default App