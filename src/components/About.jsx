// import React from 'react'
import { Link } from "react-router-dom"

function About() {
  return (
    <>
     <div>
     <Link to='/'> Home </Link>
        <Link to='/projects'> About </Link>
        <Link to='/contacts'> Contact</Link>
    </div>
    <div>about</div>
    </>
  )
}

export default About