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
    <div className="text-red-800">About me</div>
    </>
  )
}

export default About