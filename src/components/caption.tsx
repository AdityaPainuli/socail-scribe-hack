import React from 'react'

const Caption = (content: any) => {
    return (
        <div className='bg-gray-200 flex flex-col space-y-2 p-2 rounded-md shadow-md'>
            <h1 className='text-xl font-bold text-blue-500'>Caption</h1>
            <p>{content}</p>
        </div>
    )
}

export default Caption
