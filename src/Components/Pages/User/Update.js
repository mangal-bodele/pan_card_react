import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Update() {
    const {register,setValue,handleSubmit} = useForm()
    const navi = useNavigate()
    const {userId} = useParams()

    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('pan',result.data.pan)
        setValue('name',result.data.name)
        setValue('age',result.data.age)
        setValue('city',result.data.city)
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`,data)
        navi('/Show')

    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='Add'>
      <form onSubmit={handleSubmit(saveData)}>
        <h3 className='Add-h3'>Pan Card Update information</h3>
        <label className='Add-label' htmlFor='pn'><b>Enter pan no:</b></label>
        <input type ='text' id='pn'className='form-control col-3 border border-info'{...register('pan')}/>
        <br/><br/>
        <label className='Add-label' htmlFor='n'><b>Enter name:</b></label>
        <input type ='text' id='n'className='form-control col-3 border border-warning'{...register('name')}/>
        <br/><br/>
        <label className='Add-label' htmlFor='a'><b>Enter age:</b></label>
        <input type ='number' id='a'className='form-control col-3 border border-secondary'{...register('age')}/>
        <br/><br/>
        <label className='Add-label' htmlFor='c'><b>Enter city:</b></label>
        <input type ='text' id='c'className='form-control col-3 border border-primary'{...register('city')}/>
        <br/><br/>
        <input type='submit' value='Update' className='btn btn-success col-6'/> 
        <input type='reset' className='btn btn-danger col-6'/>
      </form>

    </div>
  )
}

export default Update