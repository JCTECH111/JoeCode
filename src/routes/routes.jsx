import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import Nav from "../components/Nav";
import ProjectDetail from '../pages/ProjectDetails';
import ProjectsPage from "../pages/ProjectsPage";
export default function AppRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}