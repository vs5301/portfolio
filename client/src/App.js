import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/modules/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Experience from './components/pages/Experience/Experience';
import Skill from './components/modules/Skill/Skill';
import Project from './components/modules/Project/Project';
import Resume from './components/pages/Resume/Resume';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';


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
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
