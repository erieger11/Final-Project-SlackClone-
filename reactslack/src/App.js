import './App.css';
import Login from './Components/Login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
