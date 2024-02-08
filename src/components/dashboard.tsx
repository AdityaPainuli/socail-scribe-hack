"use client";
import React from 'react';
import { PlusIcon } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";




const Dashboard = () => {
    const { user } = useKindeBrowserClient()
    const router = useRouter();
    return (

        <div className='max-w-[80%] m-auto my-[1rem]'>
            <h1 className='text-6xl font-bold '>Good morning ,<span className='capitalize'>{user?.given_name}</span></h1>
            <p className='my-4 text-xl '>Tools to help you build an online presence.</p>


            <div className='flex space-x-4'>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/dashboard/createpost')} className='w-[300px] h-[300px] hover:bg-gray-300 px-2 text-center flex flex-col  justify-center items-center bg-gray-200 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Create your next trending post for linkedin</h2>
                        <PlusIcon size={40} />
                    </div>
                </div>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/dashboard/createcaption')} className='w-[300px] h-[300px] hover:bg-gray-300 px-2 text-center flex flex-col  justify-center items-center bg-gray-200 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Create caption for instagram posts</h2>
                        <PlusIcon size={40} />
                    </div>
                </div>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/dashboard/createsuggestion')} className='w-[300px] h-[300px] hover:bg-blue-600 text-white px-2 text-center flex flex-col  justify-center items-center bg-blue-500 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Create post based on ai suggestions</h2>
                        <PlusIcon size={40} />
                        <span className='text-sm text-white'>Only applicable after creating atleast 5 posts </span>
                    </div>
                </div>
                <div className='mt-[10px] cursor-pointer'>
                    <div onClick={() => router.push('/dashboard/talkpdf')} className='w-[300px] h-[300px] hover:bg-blue-600 text-white px-2 text-center flex flex-col  justify-center items-center bg-blue-500 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl '>Talk with your pdf</h2>
                        <PlusIcon size={40} />
                        <span className='text-sm text-white'>Only applicable for paid users. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
