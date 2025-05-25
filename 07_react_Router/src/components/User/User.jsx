import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    let {id}=useParams()
  return (
    
    <div className='bg-gray-500 text-center'>User:{id}</div>
  )
}

export default User