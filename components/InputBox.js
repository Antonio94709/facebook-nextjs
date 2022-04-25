import { CameraIcon, EmojiHappyIcon, ExternalLinkIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { getMaxListeners } from 'process'
import React, { useRef } from 'react'
import { db } from '../Firebase'
import firebase from "firebase/app"


const InputBox = () => {
    const inputRef = useRef(null)
    const sendPost = (e) => {
        e.preventDefault
        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: 'Exil',
            email: "lopcne@gmail.com",
            image: "/image/Anton.png",
            timestamp: firebase.firestore.Fieldvalue.serverTimestamp()
        })

        inputRef.current.value = '';
      
    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <UserIcon className='w-5 h-5' />
                <form className='flex flex-1'>
                    <input ref={inputRef} type="text" placeholder='Whats on your mind ?' className='rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none' />
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