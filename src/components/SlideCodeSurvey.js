import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { BasicInformation, CurrentPractices, Feedback, GitHubUsage, InterestInFeatures } from '@/surveyData';
import { api } from '@/utils/axiosConfig';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import ImageOption from './ImageOption';
const PdfRender =  dynamic(() => import('@/components/PdfRender'),{ssr:false})

const SlideCodeSurvey = () => {
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();
    
    const metadata = {
        name: "HarmonicSlide",
        description: "Hi! We’re developing a tool called HarmonicSlide.HarmonicSlide is a tool to help developers effortlessly create and share professional, visually engaging content on LinkedIn and other platforms. With ready-made templates, content suggestions based on your recent code updates, and easy customization, HarmonicSlide saves you time and enhances your ability to showcase your work."
    };

    const renderInput = (survey, i) => {
        if(survey.type.split(":")[0] === "singleInput"){
            return <div key={i} className='my-4'>
                        <label className='font-ArchivoMedium text-base'>{survey.question}</label>
                        <div className=' w-full'>
                            <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name={survey.name} type={survey.type.split(":")[1]} required/>
                        </div>
                    </div>
        }

        if(survey.type.split(":")[0] === "singleInputNotRequired"){
            return <div key={i} className='my-4'>
                        <label className='font-ArchivoMedium text-base'>{survey.question}</label>
                        <div className=' w-full'>
                            <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name={survey.name} type={survey.type.split(":")[1]}/>
                        </div>
                    </div>
        }

        if(survey.type === "radio"){
            return <div key={i} className='my-4'>
                        <h3 className='font-ArchivoMedium text-base mb-2'>{survey.question}</h3>
                        <div className=' w-full'>
                            {
                                survey.options.map((option, i)=>{
                                    if(option==="Other"){
                                        return  <div key={i} className='flex items-center gap-x-2 my-1'>
                                                    <div className=''>
                                                        <input className='text-xs sm:text-sm font-ArchivoRegular border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name={survey.name} type="radio" id={`${survey.name}:Other`} value={option} />
                                                    </div>
                                                    <label className='font-ArchivoRegular text-sm' htmlFor={`${survey.name}:Other`}>{option}</label>
                                                    <div className='w-full'>
                                                        <input className='w-full text-xs sm:text-sm font-ArchivoRegular border-b border-b-slate-300 focus:border-b-bgSecondary focus:outline-transparent accent-bgSecondary' name={`${survey.name}_Other`} type="text" />
                                                    </div>
                                                </div>
                                    }
                                    return  <div className='flex gap-x-2 my-1' key={i}>
                                                <div>
                                                    <input className='text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' type="radio" id={`${survey.name}_${option}`} name={survey.name} value={option} required />
                                                </div>
                                                <label className='font-ArchivoRegular text-sm' htmlFor={`${survey.name}_${option}`}>{option}</label>
                                            </div>
                                })
                            }
                        </div>
                    </div>
        }

        
        if(survey.type === "check"){
            return <div key={i} className='my-4'>
                        <h3 className='font-ArchivoMedium text-base mb-2'>{survey.question}</h3>
                        <div className=' w-full'>
                            {
                                survey.options.map((option, i)=>{
                                    if(option==="Other"){
                                        return  <div key={i} className='flex items-center gap-x-2 my-1'>
                                                    <div className=''>
                                                        <input className='text-xs sm:text-sm font-ArchivoRegular border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' 
                                                            name={survey.name} type="checkbox" id={`${survey.name}:Other`} value={option} />
                                                    </div>
                                                    <label className='font-ArchivoRegular text-sm' htmlFor={`${survey.name}:Other`}>{option}</label>
                                                    <div className='w-full'>
                                                        <input className='w-full text-xs sm:text-sm font-ArchivoRegular border-b border-b-slate-300 focus:border-b-bgSecondary focus:outline-transparent accent-bgSecondary' name={`${survey.name}_Other`} type="text" />
                                                    </div>
                                                </div>
                                    }

                                    return  <div className='flex gap-x-2  my-1' key={i}>
                                                <div>
                                                    <input className='text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' type="checkbox" id={option} name={survey.name} value={option} />
                                                </div>
                                                <label className='font-ArchivoRegular text-sm' htmlFor={option}>{option}</label>
                                            </div>
                                })
                            }
                        </div>
                    </div>
        }

        if(survey.type === "images"){
            return <div key={i} className='my-4'>
                        <h3 className='font-ArchivoMedium text-base mb-2'>{survey.question}</h3>
                        <div className=' w-full'>
                            {
                                survey.options.map((option, i)=>{
                                    return  <div className='my-1' key={i}>
                                                <div className='flex gap-x-2 mb-2 mt-4'>
                                                    <div>
                                                        <input className='text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' type="checkbox" id={option} name={survey.name} value={option} />
                                                    </div>
                                                    <label className='font-ArchivoRegular text-sm' htmlFor={option}>{option}</label>
                                                </div>
                                                <div className=' bg-slate-100 px-2 py-2 flex items-center gap-x-3 overflow-x-auto'>
                                                    <ImageOption option={option} />
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        try{
            const response = await api.post("/surveyResponse", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            setLoading(false);
            router.push("/surveyCompleted");
            console.log("response: ",response);

        }catch(err){
            if(err.response?.data?.message) return alert(err.response?.data?.message);
            alert(err.message);
            setLoading(false);
        }
    }

    async function setView(){
        try{
            const response = await api.post("/addView");
            console.log(response);
        }catch(err){
            console.log("Err: ", err);
        }
    }

    useEffect(()=>{
        //setView();
    },[]);


  return (
    <div>
        <header className=' text-center'>
            <h1 className='font-ArchivoExtraBold text-3xl sm:text-4xl text-bgDark'>{metadata.name}</h1>
        </header>

        <div className='flex justify-center items-center w-full bg-bgSecondary mt-3 rounded-md shadow-xl'>
            <Image
                src="/survey.png"
                alt="Survey"
                width={200}
                height={100}
            />
        </div>
        
        <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
            <h3 className='font-ArchivoSemiBold text-base'>Description: </h3>
            <p className='font-ArchivoMedium text-sm'>{metadata.description}</p>
        </div>

        <div>
            <PdfRender />
        </div>

        <form onSubmit={handleSubmit}>
                
            <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
                    {
                        BasicInformation.surveys.map(renderInput)
                    }
            </div>

            <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
                    {
                        CurrentPractices.surveys.map(renderInput)
                    }
            </div>

            <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
                    {
                        GitHubUsage.surveys.map(renderInput)
                    }
            </div>

            <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
                    {
                        InterestInFeatures.surveys.map(renderInput)
                    }
            </div>

            <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
                    {
                        Feedback.surveys.map(renderInput)
                    }
            </div>

            <div className='flex justify-end'>
                {
                    loading ? 
                    <button type="submit" className='mt-4 bg-bgSecondary text-white px-6 py-2 rounded-md'>
                        submitting...
                    </button> : 
                    <button type="submit" className='mt-4 bg-bgDark hover:shadow-none text-white px-6 py-2 rounded-md shadow-md'>
                        Submit Survey
                    </button>
                }
            </div>
        </form>

    </div>
  )
}

export default SlideCodeSurvey;