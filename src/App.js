import './App.css';
import Home from './Components/Home';
import Login from './Components/Admin/LoginRegistration/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Admin/LoginRegistration/Registration';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Subject from './Components/Admin/Subject/Subject';
import ViewQuestions from './Components/Admin/Subject/ViewQuestions';
import SelectStudents from './Components/Admin/Subject/SelectStudents';
import StuLogin from './Components/User/LoginRegistration/StuLogin';
import StuRegistration from './Components/User/LoginRegistration/StuRegistration';
import StuDashboard from './Components/User/Dashboard/StuDashboard'
import Test from './Components/User/Subject/Test';
import ViewAnswers from './Components/Admin/Subject/ViewAnswers';
import ProtectedRoute from './Components/User/ProtectedRoute';
import ProtectedRouteAdmin from './Components/Admin/ProtectedRouteAdmin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/studentLogin' element={<StuLogin />} />
          <Route exact path='/studentRegistration/studentLogin' element={<StuLogin />} />
          <Route exact path='/studentRegistration' element={<StuRegistration />} />
          <Route exact path='/adminLogin' element={<Login />} />
          <Route exact path='/adminRegistration/adminLogin' element={<Login />} />
          <Route exact path='/adminRegistration' element={<Registration />} />

          <Route element={<ProtectedRouteAdmin />} >
            <Route exact path='/adminDashboard' element={<Dashboard />} />
            <Route path='/subject/:subject' element={<Subject />} />
            <Route path='/viewQuestions/:subject' element={<ViewQuestions />} />
            <Route path='/selectStudents/:subject' element={<SelectStudents />} />
            <Route path='/viewAnswers/:subject/:id' element={<ViewAnswers />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route exact path='/studentDashboard' element={<StuDashboard />} />
            <Route path='/test/:subject' element={<Test />} />
          </Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
