import { useRouter } from 'next/router';
import React from 'react'


const Responses = () => {
    const router=useRouter();
    const { id } = router.query;

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
    }

    return (
        <div className=' bg-communitywave text-center text-3xl'>Responses { id }</div>
    )
}

export default Responses;