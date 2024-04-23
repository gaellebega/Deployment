// import React from 'react'
import { Link } from "react-router-dom"


function Home() {
  return (
    <>
    <div>
        <Link to='/'> Home </Link>
        <Link to='/projects'> About </Link>
        <Link to='/contacts'> Contact</Link>
    </div>
    <div>home</div>
    </>
  )
}

export default Home