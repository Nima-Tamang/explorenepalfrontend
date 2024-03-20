import React from 'react'
import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useGetDestinationByCodeQuery } from '../../../Apis/destinationItemApi';

const DestinationDetails = () => {

    const{code}=useParams();
    const{data,isLoading}=useGetDestinationByCodeQuery(code);
const navigate=useNavigate();
  return (
    <div className="container pt-4 pt-md-5">
        {!isLoading ? (
            <>
             Destination{data.result.code}
             <button onClick={()=>navigate(-1)}>Back to home</button>
            </>
        ):(
         <div>Loading...</div>
        )}
    </div>
  )
}

export default DestinationDetails