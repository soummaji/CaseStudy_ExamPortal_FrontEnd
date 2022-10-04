import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar';
import { useEffect, useState } from 'react';
import axios from "axios";

const ViewQuestions = () => {

    let { subject } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        return await axios
            .get(`http://localhost:8080/displayAnswers/${subject}`)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
    };

    const del = async (id) => {
        console.log(id);
        axios.delete(`http://localhost:8080/deleteSubject/${id}`)
            .then((response) => {
                console.log(response.data)
                loadData();
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center mt-4'><u>All Questions of {subject}</u></h1>
            <div className='col-md-8 mx-auto my-5'>
                <table class="table text-center table-striped table-hover">
                    <thead>
                        <tr class="table-info">
                            <th>SNo.</th>
                            <th>Question</th>
                            <th>Answers</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.question}</td>
                                <td>{item.answer}</td>
                                <td><button type="button" class="btn btn-outline-danger" onClick={() => del(item.id)}><i class="bi bi-trash3-fill"></i></button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewQuestions
