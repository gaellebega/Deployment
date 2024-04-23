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
    <div className="text-2xl font-bold mb-2"> Contacts   Me</div>
</>
  )
}

export default Contacts