import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router';




function Viewdetail() {

  let navigate = useNavigate();
  let params = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://64205ac982bea25f6dff6b98.mockapi.io/teacher/${params.id}`)
        setUser(response.data)
      } catch {
        console.log("data Error")
      }
    }
    fetchData();
  }, [params.id])

  let handleClick = () => {
      navigate('/teachers')
  }
  return (
    <div>
      <h1 className='text-center text-dark'>Teachers Details</h1>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
            <thead className="text-center text-dark">
              <tr>
                <th className='h4'>ID</th>
                <th className='h4'>Name</th>
                <th className='h4'>Age</th>
                <th className='h4'>Department</th>
              </tr>
            </thead>
            <tbody>
              <td className='text-center text-dark h3 text-capitalize'>{user.id}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.name}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.age}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.department}</td>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn btn-primary"onClick={handleClick}>Return Teachers</button>
         </div>
    </div>
  )
}

export default Viewdetail;