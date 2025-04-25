import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}