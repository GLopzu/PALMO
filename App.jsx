// En tu archivo App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectSearchPage from './pages/Projectepage/Projectpage';
import ViewProjectPage from './pages/Viewprojectpage/Viewprojectpage';
import ProjectCarousel from './components/projectCarousel/projectCarousel';
import Navbar from './components/Navbar/navbar';
import projects from './const/projectCard';

export default function App() {
  return (
    <Router>
      <div>
<Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <ProjectSearchPage projects={projects} />
              </div>
            }
          />
          <Route
            path="/project/:projectId"
            element={
            <div>
              <ViewProjectPage projects={projects}/>
              <ProjectCarousel projects={projects} />
               </div>
            
            

            }
          />
        </Routes>
      </div>
    </Router>
  );
}
