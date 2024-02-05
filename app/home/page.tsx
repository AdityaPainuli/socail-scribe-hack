"use client"

import { useSession } from '@clerk/nextjs'
import { getAuth } from '@clerk/nextjs/server'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
    const { session } = useSession();
    const router = useRouter();

    return (
        <div className='max-w-[80%] m-auto my-[1rem]'>
            <h1 className='text-6xl font-bold '>Hello , <span className='capitalize'>{session?.user.fullName} 👋🏻</span></h1>
            <p className='my-4 text-xl '>Tools to help you build an online presence.</p>


            <div className='flex space-x-4'>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/home/createpost')} className='w-[300px] h-[300px] hover:bg-gray-300 px-2 text-center flex flex-col  justify-center items-center bg-gray-200 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Create your next trending post for linkedin</h2>
                        <PlusIcon size={40} />
                    </div>
                </div>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/home/createcaption')} className='w-[300px] h-[300px] hover:bg-gray-300 px-2 text-center flex flex-col  justify-center items-center bg-gray-200 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Create caption for instagram posts</h2>
                        <PlusIcon size={40} />
                    </div>
                </div>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/home/createsuggestion')} className='w-[300px] h-[300px] hover:bg-blue-600 text-white px-2 text-center flex flex-col  justify-center items-center bg-blue-500 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Create post based on ai suggestions</h2>
                        <PlusIcon size={40} />
                        <span className='text-sm text-white'>Only applicable after creating atleast 5 posts </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
