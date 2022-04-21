import React from 'react'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon , FlagIcon , PlayIcon, ShoppingCartIcon, UserGroupIcon} from "@heroicons/react/outline"
import HeaderIcon from "../components/HeaderIcon"
import Image from 'next/image'

const Headers = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md '>
      {/* left */}
      <div className='flex items-center'>
        <div>
          <p>f</p>
        </div>
        <div className='flex bg-slate-200 rounded-full p-2 ml-2 items-center space-x-2'>
          <SearchIcon className='h-6 text-gray-500' />
          <input type="text" className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink ' placeholder='Search facebook' />
        </div>
      </div>
      {/* center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active={true} Icon={HomeIcon}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* profile */}
        <p className='whitespace-nowrap font-semibold pr-3'>exil</p>
        <ViewGridIcon className='icons'/>
        <ChatIcon className='icons'/>
        <BellIcon className='icons'/>
        <ChevronDownIcon className='icons'/>
      </div>
    </div>
  )
}

export default Headers