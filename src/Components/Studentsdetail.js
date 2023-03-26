import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Studentsdetail = () => {


    const [userData, setUsersData] = useState([])


    useEffect(() => {
        async function fetchData() {
            try {
                let users = await axios.get("https://64205ac982bea25f6dff6b98.mockapi.io/Students/")
                setUsersData(users.data)
            } catch {
                console.log("error")
            }
        }
        fetchData();

    }, [])








    return (
        <><div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-0 text-gray-800">Student List</h1>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">


            </div>


            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>RollNumber</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Grade</th>
                                    <th className='text-center'>Throw</th>


                                </tr>
                            </thead>

                            <tbody>

                                {
                                    userData.map((data) => {
                                        return <tr>
                                            <td>{data.rollNumber}</td>
                                            <td>{data.name}</td>
                                            <td>{data.age}</td>
                                            <td>{data.grade}</td>
                                            <td>
                                                <div className='text-center'>
                                                    <Link to={"/teachers"} type="button" className="btn btn-success m-1">Go Back</Link >
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>


        </>
    )
}

export default Studentsdetail;