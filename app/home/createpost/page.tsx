"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader } from 'lucide-react';

const CreatePost = () => {
    const [topic, setTopic] = useState<string>("");
    const [targetAudience, setTargetAudience] = useState<string>("");
    const [tone, setTone] = useState<string>("");
    const [keywords, setKeywords] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleClick = async () => {
        if (topic === "" || targetAudience === "" || tone === "") return;
        if (loading) return true;
        setLoading(true);
        await fetch("/api/generatePost", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                topic, targetAudience, tone, keywords
            })

        }).then(async (res) => {
            const { content } = await res.json();
            console.log(content);
            setLoading(false);
            setContent(content);

        })

    }
    return (
        <div className='max-w-[80%] flex  space-x-4 p-4  min-h-[500px] mt-[2rem]  m-auto  rounded-md bg-gray-100 '>
            <div className='min-h-full min-w-[50%] '>
                <h1 className='font-semibold text-2xl '>Linkedin posts</h1>
                <p className='text-gray-600 w-[80%] mt-[20px]'>Engage your target audience by generating a eye-catching and contentful posts.</p>

                <div className='min-w-full flex flex-col space-y-4 my-[1rem]'>
                    <h1 className='text-gray-600 font-semibold '>What is your post about ?  <span className='text-red-500'>*</span></h1>
                    <input className='rounded-md bg-white p-2 outline-none' value={topic} onChange={(e) => setTopic(e.target.value)} placeholder='What to do after bca' />
                </div>
                <div className='min-w-full flex flex-col space-y-4 my-[1rem]'>
                    <h1 className='text-gray-600 font-semibold '>What is your target audience ?  <span className='text-red-500'>*</span></h1>
                    <input className='rounded-md bg-white p-2 outline-none' value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} placeholder='tech,bca,education' />
                </div>
                <div className='min-w-full flex flex-col space-y-4 my-[1rem]'>
                    <h1 className='text-gray-600 font-semibold '>Keywords  <span className='text-red-500'>*</span></h1>
                    <input className='rounded-md bg-white p-2 outline-none' value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder='tech,bca,education' />
                </div>
                <div className='min-w-full flex flex-col space-y-4 my-[1rem]'>
                    <h1 className='text-gray-600 font-semibold '>Tone</h1>
                    <input className='rounded-md bg-white p-2 outline-none' value={tone} onChange={(e) => setTone(e.target.value)} placeholder="conversational" />
                </div>
                <div className='w-full flex justify-end'>
                    <Button onClick={handleClick} className='bg-blue-600 font-semibold text-white hover:bg-blue-500 '>{
                        loading ? <Loader /> : "Generate"
                    }</Button>
                </div>
            </div>
            {content ? (
                <div className='flex  bg-white max-h-[500px]  rounded-md flex-col space-y-4 w-full  min-h-full items-center'>
                    <ScrollArea>
                        <h1 className='font-semibold text-sm px-3 py-2 whitespace-pre-wrap' >{content ? content : "No content yet"}</h1>
                    </ScrollArea>
                </div>
            ) : (
                <div className='flex justify-center bg-white max-h-[500px]  rounded-md flex-col space-y-4 w-full  min-h-full items-center'>

                    <Image src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg" width={"200"} height={"200"} alt="no-content" />


                    <h1 className='font-semibold text-sm px-3 py-2 whitespace-pre-wrap' >No content yet</h1>

                </div>
            )}


        </div>
    )
}

export default CreatePost
