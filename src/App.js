import './App.css';
import Home from './Components/Home';
import Login from './Components/Admin/LoginRegistration/Login';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Registration from './Components/Admin/LoginRegistration/Registration';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Subject from './Components/Admin/Subject/Subject';
import ViewQuestions from './Components/Admin/Subject/ViewQuestions';
import SelectStudents from './Components/Admin/Subject/SelectStudents';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ='/' element ={<Home/>}/>
          <Route exact path ='/adminLogin' element ={<Login/>}/>
          <Route exact path ='/adminRegistration' element ={<Registration/>}/>
          <Route exact path ='/adminDashboard' element ={<Dashboard/>}/>
          <Route path ='/subject/:subject' element ={<Subject/>}/>
          <Route path ='/viewQuestions/:subject' element ={<ViewQuestions/>}/>
          <Route path = '/selectStudents/:subject' element ={<SelectStudents/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
