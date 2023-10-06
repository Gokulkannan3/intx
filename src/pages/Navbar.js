import React from 'react'
import ups from '../components/images/ups.png'
import user from '../components/images/user.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
          <div className="bg-white ">
          <nav className="bg-white relative h-24 border-2 border-shadow-gray-500">
            <img src={ups} alt="im" className="translate-y-6 h-14 translate-x-56"/>
            <div  className="flex h-12 justify-end">
              <Link to='/signup'>
                <img src={user} alt="i" className="mt-4 h-10 -translate-y-12 flex justify-center mr-40 bg-yellow-400 rounded-full"/>
                <p className="mt-4 -translate-y-10 flex justify-center text-black -translate-x-36" >Sign In</p>
              </Link>
            </div>
          </nav>
          
         </div>
       </div>
  )
}
