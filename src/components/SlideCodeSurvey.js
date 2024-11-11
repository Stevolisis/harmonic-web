import React from 'react'
import Image from 'next/image'


const SlideCodeSurvey = () => {
    const metadata = {
        name: "HarmonicSlide",
        description: "Hi! We’re developing a tool called HarmonicSlide.HarmonicSlide is a tool to help developers effortlessly create and share professional, visually engaging content on LinkedIn and other platforms. With ready-made templates, content suggestions based on your recent code updates, and easy customization, HarmonicSlide saves you time and enhances your ability to showcase your work."
    };

  return (
    <div>
        <header className=' text-center'>
            <h1 className='font-ArchivoExtraBold text-4xl text-bgDark'>{metadata.name}</h1>
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
            <h3 className='font-ArchivoSemiBold'>Description: </h3>
            <p className='font-ArchivoMedium text-sm'>{metadata.description}</p>
        </div>


    </div>
  )
}

export default SlideCodeSurvey;