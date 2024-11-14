import React from 'react'


const surveyCompleted = () => {

  return (
    <div className='px-5 md:px-32 w-full h-[90vh] flex flex-col justify-center items-center bg-communitywave'>
        <div className=' text-center flex items-center gap-x-3 my-3'>
            <h1 className='font-ArchivoExtraBold text-3xl sm:text-4xl text-bgDark'>Thank you for your feedback!!!</h1>
        </div>
        <div>
            <p className='font-ArchivoMedium text-center'>
                Your insights are helping us make HarmonicSLide a powerful tool for developers to showcase their work and share their journey with ease. We can’t wait to show you what’s coming next!
            </p>
        </div>
    </div>
  )
}

export default surveyCompleted