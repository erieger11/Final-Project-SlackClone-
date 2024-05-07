import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import Header from './Components/Header';
import Rightsidebar from './Components/RightSidebar/RightSidebar';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Rightsidebar />
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

export default App;
