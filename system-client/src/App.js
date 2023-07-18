import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './home/HomePage';
import LoginScreen from './login/Login';
import MainPage from './mainpage/MainPage';
import Header from './header/Header';
import {  useLocation } from 'react-router-dom';
import Registr from './registr/Registr';



function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation();


  if (!localStorage.item ) {
     navigate('/login');
  }
  return (
    <div>
      {pathname !=="/login" && (pathname !=="/registration" && <Header/>)  }
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/api/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registration" element={<Registr />} />

      </Routes>
    </div>
  );
}
export default App;