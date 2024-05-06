import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import Header from './Components/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Container>
          <Routes>
            <Route path="/home" element={<Home />} /> {/* Route for Home component */}
            <Route path="/" element={<Login />} /> {/* Login page as first screen*/}
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
