import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Nav from "../components/Nav";

export default function AppRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}