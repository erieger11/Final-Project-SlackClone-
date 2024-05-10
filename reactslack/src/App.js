import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Components/UserContext'; // Import UserProvider if using Context API
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import ConditionalApp from './ConditionalApp'; // Import ConditionalApp
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/sidebar';
import MainComponent from './Components/MainComponent/MainComponent';

function App() {
  return (
    <UserProvider>
      {' '}
      {/* Wrap entire app with UserProvider */}
      <Router>
        <ConditionalApp>
          {' '}
          {/* Wrap sidebars and main content with ConditionalApp */}
          <Rightsidebar />
          <Sidebar />
          <Container>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/main" element={<MainComponent />} />
            </Routes>
          </Container>
        </ConditionalApp>
      </Router>
    </UserProvider>
  );
}

export default App;
