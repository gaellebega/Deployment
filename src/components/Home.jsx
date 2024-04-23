// import React from 'react'
import { Link } from "react-router-dom"


function Home() {
  return (
    <>
     <div className="bg-pink-300 h-[90vh]">
     <div className="bg-green-500 border-2 border-blue">
        <div className="text-blue border-2 border-blue-500 ">
          <h1>
          Jane doe
          </h1>

          </div>
        <div>
        </div>
        </div>
        <div className="flex  flex-col gap-3 ">
      
        <Link to='/'> Home </Link>
        <Link to='/projects'> About </Link>
        <Link to='/contacts'> Contact</Link>
    </div>
    <div className="bg-orange-200 h-[76vh] w-full border-blue-500 flex">

    </div>
    
     </div>
    
    
      




    {/* <div className="text-blue-800">home</div> */}
    </>
  )
}

export default Home