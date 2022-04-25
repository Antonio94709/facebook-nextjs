import React from 'react'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon , FlagIcon , PlayIcon, ShoppingCartIcon, UserGroupIcon} from "@heroicons/react/outline"
import HeaderIcon from "../components/HeaderIcon"
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

const Headers = () => {

  const {data: session} = useSession()
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md '>
      {/* left */}
      <div className='flex items-center'>
        <div>
          <Image
          src='/image/fb.png'
          height={50}
          width={50}
          />
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
        <Image 
        onClick={signOut}
        className="rounded-full cursor-pointer"
        // src={session.user.image}
        src="/image/Solar.jpg"
        width={40}
        height={40}
        layout='fixed'
        />
        <p className='hidden sm:block  whitespace-nowrap font-semibold pr-3'>
          {/* {session.user.name} */}
          exil
        </p>
        <ViewGridIcon className='icons'/>
        <ChatIcon className='icons'/>
        <BellIcon className='icons'/>
        <ChevronDownIcon className='icons'/>
      </div>
    </div>
  )
}

export default Headers