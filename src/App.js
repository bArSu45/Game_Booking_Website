import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {

  let [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') || false);
  let [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  return (
    <div className="App">
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} userName={userName} setUserName={setUserName} />
      <AllRoutes isAuth={isAuth} setIsAuth={setIsAuth} userName={userName} setUserName={setUserName} />
      <Footer />
    </div>
  );
}

export default App;
