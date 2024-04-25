// import React from 'react'
import { Outlet, Link } from "react-router-dom"

function HomeRoute() {
  return (
    <>
    <div className="bg-pink-200 h-screen rounded-xlg">
        <div className="bg-green-200 text-blue-800 text-2xl border-2 border-blue-800 px-4 font-serif italic p-2 flex flex-end">
          <h1>John Doe</h1>
          <div className="bg-blue-300 rounded-md ml-80 px-2">
          <Link to='/'><button>log Out </button></Link>


          </div>
         
        </div>
        <div className="bg-pink-200 h-screen flex">
          <div className="text-blue-800 h-screen flex">
            <div
              className="text-blue-800 p-4 h-full border-r"
              style={{ width: "200px" }}
            >
              <nav>
                <div className="flex flex-col p-2 m-2">
                  <ul>
                    <li>
                      <Link to="/home"
                        className="py-2 px-4 block hover:text-red-500 font-serif italic p-2"
                       
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="py-2 px-4 block hover:text-red-500 font-serif italic p-2"
                        
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="py-2 px-4 block hover:text-red-500 font-serif italic p-2"
                       
                      >
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className=" flex-grow bg-orange-200 h-[76vh] w-full border-2 border-blue-800 flex flex-end">
        <Outlet />
          </div>
        </div>
    </div>
    </>
  )
}

export default HomeRoute