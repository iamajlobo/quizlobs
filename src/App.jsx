import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import { RoleContext } from './context/RoleContext';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import StudentDashboard from './pages/student/StudentDashboard';

const App = () => {
  const {role,setRole} = useContext(RoleContext);
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />  
      <Route path='/dashboard' element={(role === 'teacher')? <TeacherDashboard/> : <StudentDashboard/>} />
    </Routes>
  );
}

export default App;
