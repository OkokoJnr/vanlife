import React from 'react'
import { useOutletContext } from 'react-router'
function HostVansDetailsInfo() {
  const {hostVans} = useOutletContext()
  console.log(hostVans)
  return  (
            <div className=' host-van-detail-info'>
                <p><strong>Name:</strong>{hostVans.name}</p>
                <p><strong>Category: {hostVans.type} </strong></p>
                <p><strong>Description:</strong> {hostVans.description}</p>
                <p><strong>Visibility</strong>:{hostVans.visibility}</p>
            </div>)
}

export default HostVansDetailsInfo
