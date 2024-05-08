import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/sidebar';
import './App.css';

function MainUI() {
  return (
    <>
      <Router>
        <Rightsidebar />
        <Sidebar />
        <channels />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home component */}
            <Route path="/login" element={<Login />} /> {/* Login page as first screen*/}
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default MainUI;
