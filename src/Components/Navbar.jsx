import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate(`/`);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <>{role === "Admin" ?
                (<Link className="nav-item nav-link active" to="/adminDashboard">Dashboard</Link>) :
                (<Link className="nav-item nav-link active" to="/studentDashboard">Dashboard</Link>)
              }</>
              <Link to="/Profile" className="nav-item nav-link active">Profile</Link>
              <Link to="/AboutUs" className="nav-item nav-link active">About Us</Link>
            </div>
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link active" onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
