import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BasicInformation, CurrentPractices, Feedback, GitHubUsage, InterestInFeatures } from '@/surveyData';
import { api, baseURL } from '@/utils/axiosConfig';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const PdfRender = dynamic(() => import('@/components/PdfRender'), { ssr: false });

const Responses = () => {
    const [surveyResponse, setSurveyResponse] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const handleInputChange = (e) => {
        e.preventDefault();
    };

    const metadata = {
        name: surveyResponse?.name,
    };
    const renderInput = (survey, i) => {
        const surveyValue = surveyResponse && surveyResponse[survey.name]; // Get current survey value
      
        if (survey.type === "radio") {
          return (
            <div key={i} className="my-4">
              <h3 className="font-ArchivoMedium text-base mb-2">{survey.question}</h3>
              <div className="w-full">
                {survey.options.map((option, i) => {
                    if(option==="Other"){
                        return  <div key={i} className='flex items-center gap-x-2 my-1'>
                                    <div className=''>
                                        <input
                                            className="text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary"
                                            type="radio"
                                            id={`${survey.name}_${option}`}
                                            name={survey.name}
                                            value={option}
                                            checked={surveyResponse[`${survey.name}_${option}`]}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <label className='font-ArchivoRegular text-sm' htmlFor={`${survey.name}:Other`}>{option}</label>
                                    <div className='w-full'>
                                        <input className='w-full text-xs sm:text-sm font-ArchivoRegular border-b border-b-slate-300 focus:border-b-bgSecondary focus:outline-transparent accent-bgSecondary' 
                                            name={`${survey.name}_Other`} 
                                            type="text" 
                                            value= {surveyResponse && surveyResponse[`${survey.name}_${option}`]}
                                        />
                                    </div>
                                </div>
                    }
                    return  <div key={i} className="flex gap-x-2 my-1">
                                <input
                                className="text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary"
                                type="radio"
                                id={`${survey.name}_${option}`}
                                name={survey.name}
                                value={option}
                                checked={surveyValue === option} // Set initial checked value
                                onChange={handleInputChange}
                                required
                                />
                                <label className="font-ArchivoRegular text-sm" htmlFor={`${survey.name}_${option}`}>
                                {option}
                                </label>
                            </div>
                })}
              </div>
            </div>
          );
        }
      
        if (survey.type === "check") {
            
            return (
                <div key={i} className="my-4">
                <h3 className="font-ArchivoMedium text-base mb-2">{survey.question}</h3>
                <div className="w-full">
                    {survey.options.map((option, i) => {
                        if(option==="Other"){
                            return  <div key={i} className='flex items-center gap-x-2 my-1'>
                                        <div className=''>
                                            <input
                                                className="text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary"
                                                type="checkbox"
                                                id={`${survey.name}_${option}`}
                                                name={survey.name}
                                                value={option}
                                                checked={surveyResponse[`${survey.name}_${option}`]}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <label className='font-ArchivoRegular text-sm' htmlFor={`${survey.name}:Other`}>{option}</label>
                                        <div className='w-full'>
                                            <input className='w-full text-xs sm:text-sm font-ArchivoRegular border-b border-b-slate-300 focus:border-b-bgSecondary focus:outline-transparent accent-bgSecondary' 
                                                name={`${survey.name}_Other`} 
                                                type="text" 
                                                value= {surveyResponse && surveyResponse[`${survey.name}_${option}`]}
                                            />
                                        </div>
                                    </div>
                        }
                        return  <div key={i} className="flex gap-x-2 my-1">
                                    <input
                                        className="text-xs sm:text-sm font-ArchivoRegular outline-bgSecondary focus:border-bgSecondary accent-bgSecondary"
                                        type="checkbox"
                                        id={`${survey.name}_${option}`}
                                        name={survey.name}
                                        value={option}
                                        checked={surveyValue && surveyValue.includes(option)} // Set initial checked value for checkboxes
                                        onChange={handleInputChange}
                                    />
                                    <label className="font-ArchivoRegular text-sm" htmlFor={`${survey.name}_${option}`}>
                                        {option}
                                    </label>
                                </div>
                    })}
                </div>
                </div>
            );
        }
      
        // Single Input Field Example (as in your code)
        if (survey.type.split(":")[0] === "singleInput") {
          return (
            <div key={i} className="my-4">
              <label className="font-ArchivoMedium text-base">{survey.question}</label>
              <div className="w-full">
                <input
                  className="text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary"
                  name={survey.name}
                  type={survey.type.split(":")[1]}
                  value={surveyResponse[survey.name] || ""} // Set initial value
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          );
        }

        if(survey.type.split(":")[0] === "singleInput"){
            return <div key={i} className='my-4'>
                        <label className='font-ArchivoMedium text-base'>{survey.question}</label>
                        <div className=' w-full'>
                            <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' 
                                name={survey.name} 
                                type={survey.type.split(":")[1]} 
                                value={surveyValue || ""}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
        }

        if(survey.type.split(":")[0] === "singleInputNotRequired"){
            return <div key={i} className='my-4'>
                        <label className='font-ArchivoMedium text-base'>{survey.question}</label>
                        <div className=' w-full'>
                        <input className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-200 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' 
                                name={survey.name} 
                                type={survey.type.split(":")[1]} 
                                value={surveyValue || ""}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
        }
      };
      

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem("SlideToken");

        try {
            const response = await api.patch(`/markAsRead?id=${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            setLoading(false);
            console.log(response);
            alert(response.data.message);
        } catch (err) {
            setLoading(false);
            console.log("Err: ", err);
            if(err.response?.data?.message) return alert(err.response.data.message);
            alert(err.message);
        }
    }

    async function getSurveyReport() {
        const token = localStorage.getItem("SlideToken");

        try {
            const response = await api.get(`/getSurveyReport?id=${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            setSurveyResponse(response.data.data);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        if (id) {
            getSurveyReport();
        }
    }, [id]);

    return (
        <main className="py-10 md:py-10 px-5 md:px-32 bg-communitywave bg-bgLight">
            <div>
                <header className="text-center">
                    <h1 className="font-ArchivoExtraBold text-3xl sm:text-4xl text-bgDark">{metadata.name}</h1>
                </header>

                <div>
                    <PdfRender />
                </div>

                {surveyResponse && (
                    <form onSubmit={handleSubmit}>
                        <div className="w-full bg-white mt-3 p-5 rounded-md shadow-md">
                            {BasicInformation.surveys.map(renderInput)}
                        </div>

                        <div className="w-full bg-white mt-3 p-5 rounded-md shadow-md">
                            {CurrentPractices.surveys.map(renderInput)}
                        </div>

                        <div className="w-full bg-white mt-3 p-5 rounded-md shadow-md">
                            {GitHubUsage.surveys.map(renderInput)}
                        </div>

                        <div className="w-full bg-white mt-3 p-5 rounded-md shadow-md">
                            {InterestInFeatures.surveys.map(renderInput)}
                        </div>

                        <div className="w-full bg-white mt-3 p-5 rounded-md shadow-md">
                            {Feedback.surveys.map(renderInput)}
                        </div>

                        <div className="flex justify-end">
                            {
                                loading ? 
                                <button type="submit" className="mt-4 bg-bgSecondary text-white px-6 py-2 rounded-md">
                                    Submitting
                                </button> : 
                                <button type="submit" className="mt-4 bg-bgDark hover:shadow-none text-white px-6 py-2 rounded-md shadow-md">
                                    Mark As Read
                                </button>
                            }
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
};

export default Responses;
