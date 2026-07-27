import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { AppLayout } from './components/layout/AppLayout';

// Wrap Login to handle navigation after login
const LoginWrapper = () => {
  const navigate = useNavigate();
  return <Login onLogin={() => navigate('/mission-control')} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
