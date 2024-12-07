import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/register"
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <Router>
       <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App
