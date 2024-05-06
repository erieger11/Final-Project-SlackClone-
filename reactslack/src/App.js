import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component

function App() {
  return (
    <>
      <Router>
        <Login />
        <Routes>
          <Route path="/" />
          <Route path="/" element={<Home />} /> {/* Home page as default */}
          <Route path="/login" element={<Login />} /> {/* Login page at specific path */}
        </Routes>
        <Link to="/login">Login</Link>
      </Router>
    </>
  );
}

export default App;
