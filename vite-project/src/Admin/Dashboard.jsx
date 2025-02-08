import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';


function Dashboard() {
    const [data,setdata] = useState ([]);
      useEffect(()=>{
        fetch();
      },[])
      const fetch = async()=>{
        const res = await axios.get(`http://localhost:5000/services`);
        setdata(res.data)
      }
      const deletehandle = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/services/${id}`);
          setdata(data.filter(service => service._id !== id));
          toast.success("Service deleted");
        } catch (error) {
          console.error("Error deleting service:", error);
          toast.error("Service delete failed")
        }
      };
      const navigate = useNavigate();
      useEffect(() => {
          if (Cookies.get('admin') !== 'true') {
              navigate("/login");
          }
      }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
                <div className="container"><a className="navbar-brand">Solution</a>
                    <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse"><span className="bar1" /> <span className="bar2" /> <span className="bar3" /></button>
                    <div id="my-nav" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/dashboard">Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/add_service">Services</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <footer className="container-fluid" id="gtco-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12" id="contact">
                                <h4> Manage Service</h4>
                                <table className="table table-hover">
                                    <thead>

                                        <tr>
                                            <th>ID</th>
                                            <th>Service Name</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value,index) => {
                                                return (
                                                <tr key={index }>
                                                    <td>{value._id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.description}</td>
                                                    <td><img src={value.image} width="50px"/></td>
                                                    <td>
                                                      <Link to={`/services/${value._id}`}>
                                                        <button className='btn btn-primary'>Edit</button>
                                                        </Link>
                                                        <button className='btn btn-danger' onClick={() =>deletehandle(value._id)}>Delete</button>
                                                    </td>
                                                </tr>)
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </footer>
    </div>
  )
}

export default Dashboard
