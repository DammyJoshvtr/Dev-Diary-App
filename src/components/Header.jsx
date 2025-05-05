import React from 'react'
import { Menu, User } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex justify-between items-center pl-4 pr-4'>
      <Menu size={50} />
      <div className='text-6xl'>
        Dev Diary
      </div>
      <div className='flex justify-between items-center w-40'>
        <div className=' text-3xl'>
          Dammy
        </div>
        <div className='bg-gray-300 w-12 h-12 rounded-full flex justify-center items-center'>
          <User />
        </div>
      </div>
    </div>
  )
}

export default Header