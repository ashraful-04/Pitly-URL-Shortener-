import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { logoTransparentLarge } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const { logout } = useAuth0();

  const handleRefresh = () => {
    navigate('/app');
    window.location.reload()
  }

  return (
    <nav className='flex items-center justify-between md:justify-around space-x-5 mt-2'>
      <section className='w-1/3'>
        <img onClick={() => handleRefresh()} src={logoTransparentLarge} alt="Logo named Pitly which is in the heading used to refresh the page." />
      </section>
      <section className='w-2/3 md:w-1/3 flex items-center justify-between md:justify-around text-sm font-medium *:hover:scale-110'>
        <Link to='/app'>Home</Link>
        <Link to='/app/analytics'>Analytics</Link>
        <button className='bg-red-500 p-1 rounded-md text-xs cursor-pointer' onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173" } })}>Log out</button>
      </section>
    </nav>
  )
}

export default NavBar;