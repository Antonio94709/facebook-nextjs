import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const Post = ({ data, index, postImage }) => {
    return (
        <div key={index} className="flex flex-col">
            <div className=' p-5 bg-white mt-5 rounded-t-2xl shadow-lg'>
                <div className='flex items-center space-x-2'>
                    <UserIcon className='h-5' />

                    <div>
                        <p className='font-medium'>{data.name}</p>
                        <p className='text-xs text-gray-500'>19 January 2021</p>
                    </div>
                </div>
                <p className='pt-2'>Wasaaaaa</p>
                {postImage && (
                    <div className='relative h-56 md:h-96 bg-white'>
                        <Image src={data.src} objectFit="cover" layout='fill' />
                    </div>
                )}
            </div>

            <div className='flex justify-center items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon cursor-pointer rounded-none'>
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon cursor-pointer rounded-none'>
                    <ChatAltIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='inputIcon cursor-pointer rounded-none'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post