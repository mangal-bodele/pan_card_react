import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Add.css'


function Add() {
  const {register,handleSubmit} = useForm()

  const navi = useNavigate()

  function saveData(data){
    axios.post('http://localhost:5000/users', data)
    // alert('data added')
    navi('/Show')
  }

  return (
    <div className='Add'>
      <form onSubmit={handleSubmit(saveData)}>
        <h3 className='Add-h3'>Pan Card information</h3>
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
        <input type='submit' className='btn btn-success col-6'/> 
        <input type='reset' className='btn btn-danger col-6'/>
      </form>

    </div>
  )
}

export default Add