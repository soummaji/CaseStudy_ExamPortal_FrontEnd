import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import { useNavigate } from 'react-router-dom';

const SelectStudents = () => {

    let { subject } = useParams();
    let [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        return await axios.get("http://localhost:8080/displayAllStudent").
            then((res) => {
                setData(res.data);
            });

    }

    // const click = (id) => {
    //     console.log(id);
    //     navigate(`/viewanswersA/${subject}/${id}`);
    // }

    return (
        <div>

            <Navbar></Navbar>
            <h1 className='text-center mt-4'><u>Online Exam Portal</u></h1>
            <div className='mx-5'>
                <div className="card col-md-5 mx-auto mt-4 bg-primary">
                    <div className="card-body text-light">
                        <h4>
                            Select Student :-
                        </h4>
                    </div>
                </div>


                {data.map((item) =>
                    <div className="card col-md-5 mx-auto mt-1 border-0">
                        <button type="button" className="btn btn-outline-info py-0">
                            <div className="card-body">
                                <h5>{item.fullName}</h5>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SelectStudents
