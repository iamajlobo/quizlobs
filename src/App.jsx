import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={
        <AuthProvider>
          <Login/>
        </AuthProvider>
      } />  
      <Route path='/teacher/dashboard' element={
        <AuthProvider>
          <TeacherDashboard/>
        </AuthProvider>
      } 
      />
      <Route path='/student/dashboard' element={
        <AuthProvider>
          <StudentDashboard/>
        </AuthProvider>
      } 
      />
    </Routes>
  );
}

export default App;
