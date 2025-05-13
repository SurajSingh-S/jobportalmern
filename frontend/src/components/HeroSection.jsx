import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    // return (
    //     <div className='text-center'>
    //         <div className='flex flex-col gap-5 my-10'>
    //             <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
    //             <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
    //             <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
    //                 <input
    //                     type="text"
    //                     placeholder='Find your dream jobs'
    //                     onChange={(e) => setQuery(e.target.value)}
    //                     className='outline-none border-none w-full'

    //                 />
    //                 <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
    //                     <Search className='h-5 w-5' />
    //                 </Button>
    //             </div>
    //         </div>
    //     </div>
    // )


    return (
        <div className="text-center  py-16">
            <div className="flex flex-col gap-6 my-10 max-w-4xl mx-auto">


                <span className="mx-auto px-6 py-2 rounded-full bg-gray-100 text-[#F83002] font-semibold shadow">
                    No. 1 Job Hunt Website
                </span>


                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
                    Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
                </h1>


                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
                </p>


                <div className="flex w-full md:w-[40%] bg-white shadow-md border border-gray-200 rounded-full overflow-hidden mx-auto">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none px-5 py-3 w-full text-gray-700"
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="bg-[#6A38C2] hover:bg-[#5b30a6] rounded-none rounded-r-full flex items-center justify-center h-full px-6 py-4"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>


            </div>
        </div>
    );

}

export default HeroSection