import React from 'react'
import { useState } from 'react'
 

const AddTask = ({onSubmitAppl}) => {

    //States for the form

    const [companyF, setCompanyF] = useState('') ;
    const [roleF, setRoleF] = useState('') ;
    const [deadlineF, setDeadlineF] = useState('') ;
    const [appliedF, setAppliedF] = useState(false) ;

    const onSubmit = (e)=> {
        //prevent page refresh
        e.preventDefault();
        onSubmitAppl(companyF, roleF, deadlineF, appliedF)

        //Clears the form
        setCompanyF("");
        setRoleF("");
        setDeadlineF("");
        setAppliedF(false);
    }

  return (
    <form className='add-form' onSubmit={onSubmit }>
        <div className='form-control'>
            <label>Company Name </label>
            <input type='text' onChange={(e)=> setCompanyF(e.target.value) } value={companyF} required ></input>

        </div>

        <div className='form-control'>
            <label>Job Role</label>
            <input type='text' onChange={(e)=> setRoleF(e.target.value) } value={roleF} required></input>

        </div>

        <div className='form-control'>
            <label>Application Deadline</label>
            <input required type='date' onChange={(e)=> setDeadlineF(e.target.value) } value={deadlineF}></input>

        </div>

        <div className='form-control form-control-check'>
            <label>Applied ?</label>
            <input type="checkbox" id="haveApplied" name="haveApplied" checked={appliedF} 
            onChange={(e)=> setAppliedF(e.currentTarget.checked) }></input>
        </div>

        <input type='submit' value={`Save Job Deadline`} className='btn btn-block' ></input> 
        
    </form>
  )
}

export default AddTask
