import React from 'react'
import { Menu, User } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <Menu size={50} />
      <div className='text-6xl'>
        Dev Diary
      </div>
      <div className='flex justify-center items-center'>
        <div className=' text-3xl'>
          Dammy
        </div>
        <div className='bg-gray-300 rounded-full'>
          <User />
        </div>
      </div>
    </div>
  )
}

export default Header