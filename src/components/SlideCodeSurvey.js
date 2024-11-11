import React from 'react'
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
                                            <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgDark focus:border-bgDark' name={survey.name} type={survey.type.split(":")[1]} />
                                        </div>
                                    </div>
                        }

                        if(survey.type === "radioBtn"){
                            return  
                        }
                    })
                }
            </form>
        </div>


    </div>
  )
}

export default SlideCodeSurvey;