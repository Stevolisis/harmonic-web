import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { api, baseURL } from '@/utils/axiosConfig';

const index = () => {

    async function getSurveyReport(){
        const token = localStorage.getItem("SlideToken");

        try{
            const response = await api.get("/getAllSurveyReport", {
                headers: {
                    "Authorization": token
                }
            });
            const data = response.data;
            console.log("Data: ", data);

        }catch(err){
            console.log("Err: ", err);
            alert(err.message);
        }
    }

    useEffect(()=>{
        getSurveyReport()
    },[]);

  return (
    <div>
        
    </div>
  )
}

export default index;