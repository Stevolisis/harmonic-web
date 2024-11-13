import { useRouter } from 'next/router';
import React from 'react'


const Responses = () => {
    const router=useRouter();
    const { id } = router.query;
  return (
    <div className=' bg-communitywave text-center text-3xl'>Responses { id }</div>
  )
}

export default Responses;