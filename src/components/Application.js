import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Application = ({application, onRemoveApp, applied}) => {
  return (
    <div className={`application ${application.applied && 'applied'}`} key={application.id} onDoubleClick={()=>applied(application.id)}>
        <div>
            <h3>{application.company} 
            <FaTimes className='appCloseBtn' onClick= {()=> onRemoveApp(application.id)}  /> </h3>
            <h5>{application.role}</h5>
            <h4>{application.deadline}</h4>

            
        </div>
    </div>
  )
}

export default Application
