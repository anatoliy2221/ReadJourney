import './App.css'
import "modern-normalize";
import Register from '../pages/Register'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Reading from '../pages/Reading';
import Recommended from '../pages/Recommended';
import MyLibrary from '../pages/MyLibrary';
import Welcome from '../pages/Welcome';

function App() {


  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recommended' element={<Recommended />} />
        <Route path='/library' element={<MyLibrary />} />
        <Route path='/reading' element={<Reading />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
