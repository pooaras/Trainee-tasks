import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
function App() {


  return (
    <>
      <Sidebar />
      <Outlet />
     
    </>
  );
}

export default App;
