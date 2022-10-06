import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
    let { subject } = useParams();
    const [data, setData] = useState([]);
    const [rad, setRad] = useState("");

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

    const radioChange = async (data) => {
        setRad(data)
    }

    const Save = async () => {
        console.log(rad);
        const data = {
            answers: rad
        }
        axios.post(`http://localhost:8080/addAnswer/${localStorage.getItem("studentId")}/${subject}`, data)
            .then((result) => {
                console.log(result);
            });
    }

    return (
        <div>
            <h1 className='text-center mt-4'><u>{subject} Exam</u></h1>
            <div className='col-md-8 mx-auto my-5'>
                <table class="table text-center table-striped table-hover">
                    <thead>
                        <tr class="table-info">
                            <th>SNo.</th>
                            <th>Question</th>
                            <th>Your Choice</th>
                            <th>Save Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.question}</td>
                                <td>
                                    <input className="form-check-input" type="radio" name="radAnswer" onChange={() => radioChange('True')} />
                                    <label className="form-check-label me-3 ms-1" >
                                        True
                                    </label>
                                    <input className="form-check-input" type="radio" name="radAnswer" onChange={() => radioChange('False')} />
                                    <label className="form-check-label ms-1" >
                                        False
                                    </label>
                                </td>
                                <td><button className="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Save</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className='fixed-bottom d-flex justify-content-center'>
                <button className="btn btn-danger mb-4 rounded-pill"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">End test</button>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thank You for Giving the Test</h1>
                        </div>
                        <div className="modal-footer">
                            <Link to="/studentDashboard"><button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Answer Selected</h1>
                        </div>
                        <div class="modal-body">
                            Your answer is : {rad}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onClick={Save} data-bs-dismiss="modal">Save Answer</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Test
