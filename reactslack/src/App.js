import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Components/UserContext'; // Import UserProvider if using Context API
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import ConditionalApp from './ConditionalApp'; // Import ConditionalApp
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/Sidebar';
import MainComponent from './Components/MainComponent/MainComponent';

function App() {
  return (
    <Router>
      <Rightsidebar />
      <Sidebar />
      <channels />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainComponent />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
