import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { api, baseURL } from '@/utils/axiosConfig';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Link from 'next/link';

const index = () => {
    const [ surveyResponse, setSurveyResponse ]= useState([]);
    const [ positiveSurveyResponse, setPositiveSurveyResponse ]= useState(0);
    const [ negativeSurveyResponse, setNegativeSurveyResponse ]= useState(0);
    const [ neutralSurveyResponse, setNeutralSurveyResponse ]= useState(9);
    const router = useRouter();

    async function getSurveyReport(){
        const token = localStorage.getItem("SlideToken");

        try{
            const response = await api.get("/getAllSurveyReport", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = response.data;
            setSurveyResponse(data.data.allSurveys);
            setPositiveSurveyResponse(data.data.positiveResponses);
            setNegativeSurveyResponse(data.data.negativeResponses);
            setNeutralSurveyResponse(data.data.neutral);


        }catch(err){
            alert(err.message);
            router.push(`${baseURL}/login?next=${router.asPath.split('?')[0]}`);
        }
    }

    useEffect(()=>{
        getSurveyReport()
    },[]);

  return (
    <div className=' bg-communitywave mt-5 px-3 sm:px-11'>
        <header className=' text-center'>
            <h1 className='font-ArchivoExtraBold text-3xl sm:text-4xl text-bgDark my-5 mt-12 sm:mt-0 sm:my-3'>Admin Dashboard</h1>
        </header>

        <div className=' flex md:flex-nowrap flex-wrap justify-around items-center gap-2 my-3'>
            <div className=' bg-[dodgerblue] p-3 rounded flex-1'>
                <p className=' text-white font-ArchivoMedium text-lg whitespace-nowrap'>Total: {surveyResponse.length}</p>
            </div>
            <div className=' bg-green-700 p-3 rounded flex-1'>
                <p className=' text-white font-ArchivoMedium text-lg whitespace-nowrap'>Positive: {positiveSurveyResponse}</p>
            </div>
            <div className=' bg-gray-600 p-3 rounded flex-1'>
                <p className=' text-white font-ArchivoMedium text-lg whitespace-nowrap'>Neutral: {neutralSurveyResponse}</p>
            </div>
            <div className=' bg-red-600 p-3 rounded flex-1'>
                <p className=' text-white font-ArchivoMedium text-lg whitespace-nowrap'>Negative: {negativeSurveyResponse}</p>
            </div>
        </div>

        <div className='mb-7 overflow-x-auto'>
            <table className=' w-full bg-white rounded-md shadow-lg p-3 border-2 border-slate-200'>
                <thead className='border border-t-0 border-slate-200'>
                    <tr>
                        <td className=' p-3'>Name</td>
                        <td className=' p-3'>Email</td>
                        <td className=' p-3'>Role</td>
                        <td className=' p-3'>Read</td>
                        <td className=' p-3'>View</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        surveyResponse.map((survey, i)=>(
                            <tr>
                                <td className=' p-3 whitespace-nowrap'>{survey.name}</td>
                                <td className=' p-3'>{survey.email}</td>
                                <td className=' p-3'>{survey.role}</td>
                                <td className=' p-3'><IoCheckmarkDoneSharp size={20} className={`cursor-pointer ${survey.read ? " text-[dodgerblue] " : " text-gray-200"}`}/></td>
                                <td className=' p-3'><Link href={`/admin/responses/${survey._id}`}> <IoEye size={20} /> </Link> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default index;