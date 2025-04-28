import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'


const Applicants = () => {
    const dispatch = useDispatch();
    const {applicants}= useSelector(store=>store.application);//to get its length(no. of applicants)
    const params = useParams();  //to get id's of applicants

    useEffect(() => {
        const fetchallapplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
                console.log(res.data);

                dispatch(setAllApplicants(res.data.job));

            }
            catch (error) {
                console.log(error);
            }
        }
        fetchallapplicants();
    }, [])
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl ,x-auto '>
                <h1 className='font-bold text-xl '>Applicants {applicants?.applications?.length}</h1>
                <ApplicantsTable />
            </div>
        </div>
    )
}

export default Applicants
