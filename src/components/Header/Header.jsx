import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
       <nav className='flex p-2 bg-bgHeader'>
            <ul className='flex gap-2 px-4 py-2 text-lg flex-wrap'>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={''}><li>General</li></NavLink>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={'technology'}><li>Technology</li></NavLink>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={'sports'}><li>Sports</li></NavLink>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={'entertainment'}><li>Entertainment</li></NavLink>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={'business'}><li>Business</li></NavLink>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={'health'}><li>Health</li></NavLink>
                <NavLink className={({isActive}) => `list-none ${isActive ? 'text-green-500' : ''}`} to={'science'}><li>Science</li></NavLink>
            </ul>
       </nav>
    </div>
  )
}

export default Header
