// import React from 'react'
import { Link } from "react-router-dom"

function Contacts() {
  return (
  <>
   <div>
   <Link to='/'> Home </Link>
        <Link to='/projects'> About </Link>
        <Link to='/contacts'> Contact</Link>
    </div>
    <div>contacts</div>
</>
  )
}

export default Contacts