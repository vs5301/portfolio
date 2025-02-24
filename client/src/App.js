import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/modules/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Experience from './components/pages/Experience/Experience';
import Skill from './components/modules/Skill/Skill';
import Project from './components/modules/Project/Project';
import Resume from './components/pages/Resume/Resume';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/project/:name' element={<Project />} />
        <Route path='/skill/:name' element={<Skill />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
