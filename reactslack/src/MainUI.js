import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/sidebar';
import SearchBar from './Components/SearchBar/Searchbar';
import SearchBar from './Components/SearchBar/Searchbar.css';
// import './App.css';

function MainUI() {
  const handleSearch = term => {
    // Implement your logic for handling user search here
    console.log('Search term:', term);
  };

  return (
    <>
      <Router>
        <Rightsidebar />
        <Sidebar />
        <channels />
        <SearchBar onSearch={handleSearch} />
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
function Rightsidebar() {
  // ... Your Rightsidebar component code

  return (
    <div className="right-sidebar">
      <h2>Right Navigation</h2>
      <ul>
        <li>
          <Link to="/">
            {' '}
            {/* Wrap the button with Link and specify path "/" */}
            Home
          </Link>
        </li>
        {/* Other navigation links */}
      </ul>
    </div>
  );
}

export default MainUI;
