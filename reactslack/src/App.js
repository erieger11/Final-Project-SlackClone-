import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/sidebar';
import MainComponent from './Components/MainComponent/MainComponent';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Rightsidebar />
        <Sidebar />
        <channels />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} /> {/* Login page as first screen*/}
            <Route path="/" element={<Home />} /> {/* Route for Home component */}
            <Route path="/home" element={<Home />} /> {/* Route for Home component */}
            <Route path="/main" element={<MainComponent />} /> {/* Route for main page*/}
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
