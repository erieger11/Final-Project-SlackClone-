// import logo from './logo.svg';
import Sidebar from './Components/Sidebar/sidebar';
import './App.css';
//import Login from './Components/Login/login';
// import DirectMessage from './Components/SideBar/DirectMessage/directmessage';

function App() {
  return (
    <div className="App">
      {/* <Login/>     */}
      <Sidebar />
      <channels />
      {/* <DirectMessage/> */}
    </div>
  );
}

export default App;
