import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { api, baseURL } from '@/utils/axiosConfig';


const login = () => {
    const router = useRouter();
    const [ loading, setLoading ] = useState(false);
    const { next }= router.query;

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        try{
            const response = await api.post("/authenticateStaff", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            const data = response.data;
            localStorage.setItem("SlideToken", data.token);
            setLoading(false);

            if(router.pathname!==router.asPath.split('?')[0]){
                router.reload();
            }else{
                router.push(next||`${baseURL}/admin`);
            }
        }catch(err){
            console.log("Err: ", err);
            setLoading(false);
            if(err.response?.data.message) return alert(err.response?.data.message);
            alert(err.message);
        }
    }

  return (
    <div className=' w-full h-[80vh] flex flex-col justify-center items-center bg-communitywave'>
        <header className=' text-center'>
            <h1 className='font-ArchivoExtraBold text-3xl sm:text-4xl text-bgDark'>Sign In</h1>
        </header>
        <div className='w-[60vw] mt-5'>
            <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
                <input  className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-300 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name='name' type='text' placeholder='Name'/>
                <input  className='text-xs sm:text-sm font-ArchivoRegular py-2 px-3 border border-slate-300 rounded w-full outline-bgSecondary focus:border-bgSecondary accent-bgSecondary' name='password' type='password' placeholder='Password'/>
                <div className='flex justify-end'>
                    {
                        loading ? 
                        <button type="submit" className='mt-4 bg-bgSecondary text-white px-6 py-2 rounded-md'>
                            Submitting
                        </button> : 
                        <button type="submit" className='mt-4 bg-bgDark transition-colors hover:shadow-none text-white px-6 py-2 rounded-md shadow-md'>
                            Submit
                        </button>
                    }
                </div>

            </form>
        </div>
    </div>
  )
}

export default login