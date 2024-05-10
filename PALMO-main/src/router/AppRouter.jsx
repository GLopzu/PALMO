import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ProjectSearchPage, ViewProjectPage, LoginPage } from '../pages';
import projects from '../const/projectCard';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectSearchPage />} />
      <Route path="/projects/:projectId" element={<ViewProjectPage projects={projects} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<p>404</p>} />
    </Routes>
  );
}
