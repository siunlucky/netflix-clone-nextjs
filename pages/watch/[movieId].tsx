import { useRouter } from 'next/router';
import React from 'react';
import useMovie from '@/hooks/useMovie';

import { AiOutlineArrowLeft } from 'react-icons/ai';

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    return (
        <div className="w-screen h-screen bg-black ">
            <nav className='fixed z-10 flex flex-row items-center w-full gap-8 p-4 bg-black bg-opacity-70'>
                <AiOutlineArrowLeft onClick={() => router.push('/')} className='text-white cursor-pointer' size={40} />
                <p className='font-bold text-white text-1xl md:text-3xl'>
                    <span className='font-light'>
                        Watching:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video className='w-full h-full' autoPlay controls src={data?.videoUrl}></video>
        </div>
    )
}

export default Watch;