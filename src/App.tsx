import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import About from './pages/About';
import Services from './pages/Services';
import Home from './pages/Home';
import Courses from './pages/Courses';
import News from './pages/News';
import Error from './pages/Error';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/media' element={<Media/>} />
          <Route path='/News' element={<News/>} />
          <Route path='/*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
