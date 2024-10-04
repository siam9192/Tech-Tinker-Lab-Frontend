import React from 'react'
import Searchbox from './Searchbox'
import ProfileImage from './ProfileImage'

function Header() {
  return (
    <header className='px-4 py-8 flex justify-between items-center bg-white dark:bg-dark-mode sticky top-0 shadow rounded-lg'>
        <Searchbox/>
       <ProfileImage/>
    </header>
  )
}

export default Header