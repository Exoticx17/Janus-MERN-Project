import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react' 
import Navbar from './components/navbarComp';
import Footer from './components/footerComp';
import Home from './pages/home';
import Admin from './pages/admin';
import Charts from './pages/charts';
import Courses from './pages/courses';
import Login from './pages/login';
import Signup from './pages/signup';
import Submission from './pages/submission';
import Landing from './pages/landing';
import CSubject from './pages/cSubject';
import AddEdit from './pages/addedit';
import View from './pages/view';
import EditDelete from './pages/editdelete';
import SPost from './pages/sPost';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='routes'> 
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/charts" element={<Charts />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/course/:category" element={<CSubject />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/submission" element={<Submission />} />
            <Route exact path="/addedit" element={<AddEdit />} />
            <Route exact path="/editdelete" element={<EditDelete />} />
            <Route exact path="/viewing" element={<View/>} />
            <Route exact path="/post/:id" element={<SPost />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

