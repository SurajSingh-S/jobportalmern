import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import AdminJobsTabless from './AdminJobsTables';
import { setSearchJobByText } from '@/redux/jobSlice';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
function Jobs() {
    useGetAllAdminJobs();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(setSearchJobByText(input));
    }, [input])
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>

                <div className='flex items-center justify-between my-5'>
                    <Input
                        className="w-fit"
                        placeholder="filter by name & role"
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <Button onClick={() => navigate("/admin/jobs/create")} >New Jobs</Button>

                </div>
                <AdminJobsTabless />
            </div>
        </div>
    )
}
export default Jobs
