import Image from 'next/image'
import React from 'react'

const StoryCard = ({ name, src, profile , index }) => {
    return (
        <div key={name} className='relative h-10 w-10 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overscroll-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-p'>
            <Image
                className='absolute opacity-0 lg:opacity-100 rounded-full z-10 top-10'
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit='cover'
            />
            <Image
                className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
                src={src}
                layout="fill"
            />
            <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/4 text-white text-sm font-bold truncate'>{name}</p>
        </div>
    )
}

export default StoryCard