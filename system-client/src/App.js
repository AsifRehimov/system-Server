import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './home/HomePage';
import LoginScreen from './login/Login';
import MainPage from './mainpage/MainPage';


function App() {
  const navigate = useNavigate()


  if (!localStorage.item ) {
     navigate('/login');
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/api/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />

      </Routes>
    </div>
  );
}
export default App;