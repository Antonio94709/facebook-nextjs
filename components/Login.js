import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image
        src="/image/Anton.png"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login