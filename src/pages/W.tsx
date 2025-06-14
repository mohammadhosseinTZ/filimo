import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router'

function W() {
    const {id} = useParams()
    const query = useQueryClient();
    const cachedData = query.getQueryData(['movies_infinite']);
    console.log(cachedData , "cach");
    
    
      return (
    <div>W {id}</div>
  )
}

export default W