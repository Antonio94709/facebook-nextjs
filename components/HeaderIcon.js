import React from 'react'

const HeaderIcon = ({ Icon , active }) => {
  return (
    <div className='-mt-6 group items-center cursor-pointer  md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500'>
        <p className='text-transparent gr'>nn</p>
        <Icon className={`text-gray-500 h5 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active ? "text-blue-500": "text-gray-500"}`}/>
    </div>
  )
}

export default HeaderIcon