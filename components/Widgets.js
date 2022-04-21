import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'
import Contact from "../components/Contact"

const test = [
    {
        name: "first",
        src: "/image/Solar.jpg"
    },
    {
        name: "second",
        src: "/image/Solar.jpg"
    },
    {
        name: "three",
        src: "/image/Solar.jpg"
    },
    {
        name: "four",
        src: "/image/Solar.jpg"
    }
]

const Widgets = () => {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex space-x-2 justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6 ' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>
            {test.map((data , index) => (
                <Contact data={data} key={index}/>
            ))}
        </div>
    )
}

export default Widgets