import React, { Fragment } from 'react'
import Image from 'next/image'
import { BasicInformation } from '@/surveyData';


const SlideCodeSurvey = () => {
    const metadata = {
        name: "HarmonicSlide",
        description: "Hi! We’re developing a tool called HarmonicSlide.HarmonicSlide is a tool to help developers effortlessly create and share professional, visually engaging content on LinkedIn and other platforms. With ready-made templates, content suggestions based on your recent code updates, and easy customization, HarmonicSlide saves you time and enhances your ability to showcase your work."
    };


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
            <h3 className='font-ArchivoSemiBold text-sm sm:text-base'>Description: </h3>
            <p className='font-ArchivoMedium text-xs sm:text-sm'>{metadata.description}</p>
        </div>

        <div className='w-full bg-white mt-3 p-5 rounded-md shadow-md'>
            <form>
                {
                    BasicInformation.surveys.map((survey, i)=>{
                        if(survey.type.split(":")[0] === "singleInput"){
                            return <div key={i} className='my-4'>
                                        <label className='font-ArchivoMedium text-sm sm:text-base'>{survey.question}</label>
                                        <div className=' w-full'>
                                            <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name={survey.name} type={survey.type.split(":")[1]} />
                                        </div>
                                    </div>
                        }

                        if(survey.type === "radio"){
                            return <div key={i} className='my-4'>
                                        <label className='font-ArchivoMedium text-sm sm:text-base'>{survey.question}</label>
                                        <div className=' w-full'>
                                            {
                                                survey.options.map((option, i)=>{
                                                    if(option==="Other"){
                                                        return <div key={i} className=' ml-5'>
                                                            <label className='font-ArchivoRegular text-sm sm:text-base'>{option}</label>
                                                            <div className=' w-full'>
                                                                <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name={survey.name} type="text" />
                                                            </div>
                                                        </div>
                                                    }
                                                    return  <div className='flex gap-x-2' key={i}>
                                                                <div>
                                                                    <input className='text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' type="radio" id={option} name={survey.name} value={option} />
                                                                </div>
                                                                <label className='font-ArchivoRegular text-sm sm:text-base' htmlFor={option}>{option}</label>
                                                            </div>
                                                })
                                            }
                                        </div>
                                    </div>
                        }

                        
                        if(survey.type === "check"){
                            return <div key={i} className='my-4'>
                                        <label className='font-ArchivoMedium text-sm sm:text-base'>{survey.question}</label>
                                        <div className=' w-full'>
                                            {
                                                survey.options.map((option, i)=>{
                                                    return  <div className='flex gap-x-2' key={i}>
                                                                <div>
                                                                    <input className='text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' type="checkbox" id={option} name={survey.name} value={option} />
                                                                </div>
                                                                <label className='font-ArchivoRegular text-sm sm:text-base' htmlFor={option}>{option}</label>
                                                            </div>
                                                })
                                            }
                                        </div>
                                    </div>
                        }
                    })
                }
            </form>
        </div>


    </div>
  )
}

export default SlideCodeSurvey;