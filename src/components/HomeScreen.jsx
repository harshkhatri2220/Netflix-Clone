import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import requests from '../../request'
import Row from './Row'
const HomeScreen = () => {
  return (
    <div className=' bg-black'>    
      <Navbar/>
      <Banner/>
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} isLargeRow/>
      <Row title="ADVENTURE MOVIES" fetchURL={requests.fetchAdventureMovies}/>
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="ROMANTIC MOVIES" fetchURL={requests.fetchRomanceMovies}/>
    </div>
  )
}

export default HomeScreen
