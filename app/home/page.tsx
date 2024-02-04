"use client"

import { useSession } from '@clerk/nextjs'
import { getAuth } from '@clerk/nextjs/server'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const homePage = () => {
    const { session } = useSession();
    const router = useRouter();

    return (
        <div className='max-w-[80%] m-auto my-[1rem]'>
            <h1 className='text-6xl font-bold '>Hello , {session?.user.fullName}</h1>
            <p className='my-4 text-xl '>Here are all your list of posts.</p>


            <div className='mt-[10px]'>
                <div onClick={() => router.push('/home/createpost')} className='w-[300px] h-[300px] hover:bg-gray-300 px-2 text-center flex flex-col  justify-center items-center bg-gray-200 rounded-md shadow-md'>
                    <h2 className='font-semibold text-xl '>Create your next trending post</h2>
                    <PlusIcon size={40} />
                </div>
            </div>
        </div>
    )
}

export default homePage
