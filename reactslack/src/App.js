import Sidebar from './Components/Sidebar/sidebar';
import './App.css';
//import Login from './Components/Login/login';

function App() {
  const channels = [
    {
      name: 'General',
      description: 'General discussion channel',
    },
    {
      name: 'Announcements',
      description: 'Channel for important announcements',
    },
    // Add more channel objects as needed
  ];
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
