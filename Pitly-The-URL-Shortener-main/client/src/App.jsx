import './styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Analytics, Loading } from './pages';

function App() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    navigate('/');
  }

  if (isLoading) {
    return <Loading color="text-text" size="10rem" />
  }

  return (
    <div className='app h-screen p-2 overflow-hidden bg-background text-text'>
      <header>
        <NavBar />
      </header>
      <main className='h-full bg-[url("../assets/images/stars.svg")]'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='analytics' element={<Analytics />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
