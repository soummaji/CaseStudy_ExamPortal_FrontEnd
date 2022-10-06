import React from 'react'
import Navbar from './Navbar'
import img from './user-profile-icon.webp';

const Profile = () => {

    const role = localStorage.getItem("role");
    const useremail = localStorage.getItem("useremail");
    const studentId = localStorage.getItem("studentId");

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="card col-md-5 mx-auto my-5">
                    <div className="card-body text-center">
                        <img src={img} width="200" height="200" alt="user picture" />
                        <h4> <u> User Role:</u> {role}</h4>
                        <br></br>
                        <h4> <u> User Detail:</u> {useremail}</h4>
                        <br></br>
                        <h4> <u> User Id:</u> {studentId}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
