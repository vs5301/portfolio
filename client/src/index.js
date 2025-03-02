import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SkillContextProvider } from "./components/context/SkillsContext/SkillsContext"
import { ProjectContextProvider } from "./components/context/ProjectsContext/ProjectsContext"
import { ResumeContextProvider } from './components/context/ResumeContext/ResumeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkillContextProvider>
    <ProjectContextProvider>
      <ResumeContextProvider>
        <App />
      </ResumeContextProvider>
    </ProjectContextProvider>
  </SkillContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
