import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Add.css'
import { NavLink } from 'react-router-dom'

function Show() {
  const [users,setUser] = useState([])

  async function fetchdata(data){
    const result = await axios.get('http://localhost:5000/users')
    setUser(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div >
      <table className=" Add-table">
        <thead className='text-white bg-dark'>
          <tr>
            <th>PAN</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {
            users.map((obj)=>{
              return(
                <tr>
                  <td>{obj.pan}</td>
                  <td>{obj.name}</td>
                  <td>{obj.age}</td>
                  <td>{obj.city}</td>
                  <td>
                    <NavLink to={`/Update/${obj.id}`}><button className='btn-sm btn btn-secondary'>Update</button>&nbsp;</NavLink>
                    <NavLink to={`/Delete/${obj.id}`}><button className='btn-sm btn btn-secondary'>Delete</button></NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  )
}

export default Show