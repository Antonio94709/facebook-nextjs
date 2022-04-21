import { CameraIcon, EmojiHappyIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'


const InputBox = () => {
    const sendPost = (e) => {
        e.preventDefault
    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <UserIcon className='w-5 h-5' />
                <form className='flex flex-1'>
                    <input type="text" placeholder='Whats on your mind user?' className='rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none' />
                    <button className='hidden ' onClick={sendPost}>Submit</button>
                </form>
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500 ' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live video</p>
                </div>
                <div className='inputIcon'>
                    <CameraIcon className='h-6 text-green-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live video</p>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling good</p>
                </div>

            </div>
        </div>
    )
}

export default InputBox