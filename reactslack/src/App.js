import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Components/Home/Home'; // Import your Home component
import { Container } from 'reactstrap';
import Rightsidebar from './Components/RightSidebar/RightSidebar';
import Sidebar from './Components/Sidebar/sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Sidebar />
      <channels /> */}
      {/* <DirectMessage/> */}
    </div>
  );
}

export default App;
