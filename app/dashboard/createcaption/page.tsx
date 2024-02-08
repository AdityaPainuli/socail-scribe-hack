"use client"
import Caption from '@/components/caption';
import { Button } from '@/components/ui/button';
import { RefreshCwIcon } from 'lucide-react';
import React, { useState } from 'react'

const CreateCaption = () => {
    const [caption, setCaption] = useState<string[]>([]);
    const [topic, setTopic] = useState<string>("");
    const [primaryKeyword, setPrimaryKeyword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const handleClick = async () => {
        if (topic === "" || primaryKeyword === "") return;
        if (loading) return;
        setLoading(true);
        const req = await fetch("/api/generateCaption", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ topic, primaryKeyword })
        }).then(async (res) => {
            const { content } = await res.json();
            const contentArr = JSON.parse(content);
            setCaption(contentArr);
            console.log(contentArr);
            contentArr.map((conn: any) => console.log(conn?.caption))
            setLoading(false);
        })
    }
    return (
        <div className='flex flex-col space-y-4  '>
            <div className='bg-gray-200 min-w-[500px]  h-min mt-[4rem] m-auto  rounded-md p-4 shadow-md '>
                <div className='flex flex-col space-y-2 mb-4'>
                    <h1 className='font-semibold text-2xl text-center'>Instagram Caption </h1>
                    <p className='text-gray-600 '>Add details below to generate captions with AI.</p>
                </div>
                <div className='flex space-y-4 flex-col'>
                    <input className='rounded-md bg-white p-2 outline-none' value={topic} onChange={(e) => setTopic(e.target.value)} placeholder='Describe your topic' />
                    <input className='rounded-md bg-white p-2 outline-none' value={primaryKeyword} onChange={(e) => setPrimaryKeyword(e.target.value)} placeholder='Primary keyword' />
                </div>
                <Button className='my-4 bg-blue-500 hover:bg-blue-600' onClick={handleClick}>{loading ? "Loading..." : "Generate Caption"} </Button>
            </div>

            <h1 className='text-center text-3xl font-semibold mt-[2rem]'>Captions </h1>
            <div className='flex space-x-4 max-w-[90%] m-auto'>

                {
                    caption.map((conn: any, index) => {
                        console.log(conn?.caption);
                        return (
                            <div key={index} className='bg-gray-100 min-h-[150px] my-6 flex flex-col space-y-2 p-2 justify-center items-center rounded-md shadow-md'>

                                <p className=' text-gray-600'>&quot;{conn?.caption}&quot;</p>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default CreateCaption
