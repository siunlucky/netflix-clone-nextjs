import React from "react";

import { BsFillPlayFill } from "react-icons/bs";

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) => {
    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]" src={data.thumbnailUrl} alt="Thumbnail" />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" src={data.thumbnailUrl} alt="Thumbnail" />
                <div className="absolute z-10 w-full p-2 transition shadow-md bg-zinc-800 lg:p-4 rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div onClick={() => { }} className="flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300">
                            <BsFillPlayFill size={30} />
                        </div>
                    </div>
                    <p className="mt-4 font-semibold text-green-400">
                        New <span className="text-white">2023</span>
                    </p>

                    <div className="flex flex-row items-center gap-2 mt-4">
                        <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4">
                        <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;