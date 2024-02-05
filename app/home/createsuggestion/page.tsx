"use client"
import { useSession } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const createsuggestion = () => {
    const { session } = useSession();
    const [postSuggestions, setPostSuggestions] = useState<any[]>([]);

    useEffect(() => {
        const generatePost = async () => {
            await fetch('/api/generateSuggestion', {
                method: "POST",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({ userId: session?.user.id })
            }).then(async (data) => {
                const { content } = await data.json();
                setPostSuggestions(content);
                console.log(content)
            })
        }
        generatePost();
    }, [])
    return (
        <div className='max-w-[80%] m-auto'>
            <h1 className='text-4xl font-semibold mt-[3rem]'>Suggested linkedin post ideas 💡</h1>
            <p className='text-gray-500 text-sm max-w-[60%] my-[10px]'>Here are some of the post suggestions which you can handpick and post in your linkedin just in case you are out of some ideas 😉</p>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    postSuggestions.map((post, index) => (
                        <div className='bg-gray-100 shadow-md rounded-md p-2 flex flex-col space-y-3 gap-4' key={index}>
                            <h1 className='text-xl font-semibold'>{post.title}</h1>
                            <p className='text-gray-700 text-sm whitespace-pre-wrap'>{post.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default createsuggestion
