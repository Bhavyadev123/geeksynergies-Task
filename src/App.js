import React, {useState} from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
//import CompanyInfo from './components/CompanyInfo';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyInfo from './components/CompanyInfo';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <div className="App">
        <BrowserRouter>
          {isLoggedIn && <Navbar />}
          <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/companyinfo" element={isLoggedIn ? <CompanyInfo/>: <Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
                    