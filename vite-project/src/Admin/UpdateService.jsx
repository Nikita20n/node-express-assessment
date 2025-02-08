import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { NavLink } from 'react-router'
import axios from 'axios';
import Cookies from 'js-cookie';

function UpdateService() {
    const { id } = useParams();  // Get service ID from URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formdata, setFormdata] = useState({
        name: "",
        description: "",
        image: "",
    });

    // Fetch service data
    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/services/${id}`);
                console.log(res.data)
                setFormdata(res.data);
                setLoading(false);
            } catch (error) {
                toast.error("Error fetching service data");
                setLoading(false);
            }
        };
        fetchService();
    }, [id]);

    // Handle input changes
    const changeHandel = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };
      useEffect(() => {
          if (Cookies.get('admin') !== 'true') {
              navigate("/login");
          }
      }, []);
    // Submit updated data
    const submitHandel = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/services/${id}`, formdata);
            toast.success("Service updated successfully");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    if (loading) {
        return <h3>Loading service data...</h3>;
    }

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
                    <div className="container"><a className="navbar-brand">Solution</a>
                        <button className="navbar-toggler" data-target="#my-nav"  data-toggle="collapse"><span className="bar1" /> <span className="bar2" /> <span className="bar3" /></button>
                        <div id="my-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><NavLink className="nav-link" to="/dashboard">Dashboard</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/add_service">Services</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <footer className="container-fluid" id="gtco-footer">
                    <div className="container mt-3">
                        <h2>Update</h2>
                        <form action="post" method="post" onSubmit={submitHandel}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Service Name:</label>
                                <input type="text" value={formdata.name} onChange={changeHandel} className="form-control" placeholder="Enter Service Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Service Description:</label>
                                <input type="text" value={formdata.description} onChange={changeHandel} className="form-control"  placeholder="Enter Service Name" name="description" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Service Image:</label>
                                <input type="url" value={formdata.image} onChange={changeHandel} className="form-control"  placeholder="Service Image URL" name="image" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </footer>
    </div>
    );
}

export default UpdateService;
