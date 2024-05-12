import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home';
import { Container } from 'reactstrap';
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/sidebar';
import MainComponent from './Components/MainComponent/MainComponent';
import GeneralChat from './Components/GeneralChat/general';
import AnnoucementsChat from './Components/AnnoucementsChat/announcements';
import ChatRules from './Components/ChatRules/chatRules';
import QuestionsHelp from './Components/QuestionsHelp/questionsFile';

// import './App.css';
function App() {
  return (
    <Router>
      <channels />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/main" element={<MainComponent />} />
          <Route path="/general" element={<GeneralChat />} />
          <Route path="/Announcements" element={<AnnoucementsChat />} />
          <Route path="/Chat-Rules" element={<ChatRules />} />
          <Route path="/Questions-Help" element={<QuestionsHelp />} />
        </Routes>
      </Container>
    </Router>
  );
}
export default App;
