import axios from 'axios'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
  const [user, setUser] = useState({})
  const {userId}= useParams()
  const navi = useNavigate()
  async function fetchdata(){
    const result = await axios.get(`http://localhost:5000/users/${userId}`)
    setUser(result.data)
  }
  function deleteUser(){
    axios.delete(`http://localhost:5000/users/${userId}`)
    navi('/Show')
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='container border border-2 mt-5 p-3 col-5 bg-info'>
      <center><h2><u>DELETE CONFIRMATION</u></h2>
      <h3>do you really want to delete<span style={{'color':'yellow'}}> {user.pan} of {user.name}</span></h3>
      <button  className='btn btn-secondary' onClick={()=>{deleteUser()}}>YES</button>&nbsp;
      <NavLink to='/Show'><button className='btn btn-secondary' >NO</button></NavLink>
      </center>
    </div>
  )
}

export default Delete