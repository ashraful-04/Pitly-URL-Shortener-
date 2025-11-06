import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Progress } from '../components';

const Analytics = () => {
  const [entries, setEntries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { user, isLoading } = useAuth0();

  if (isLoading) return <Progress />

  useEffect(() => {
    const fetchData = async () => {
      const userEmail = user.email;

      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/url/track/${user.email}`);
        const { result } = await response.json();
        setEntries(result);
      } catch (error) {
        setErrorMessage('Some error occured!');
      }
    }

    fetchData();

  }, []);

  return (
    <div className='analytics '>
      <section>
        <h1 className='heading'>Track URLs</h1>
      </section>
      <section className='flex justify-center'>
        <div className="card">
          <section className='grid grid-cols-3 *:text-center mb-1'>
            <h5 className='col-header'>URL</h5>
            <h5 className='col-header'>Redirect</h5>
            <h5 className='col-header'>Clicks</h5>
          </section>
          {
            entries.map((currentObject) => (
              <div key={currentObject.shortId} className='grid grid-cols-3 text-center'>
                <p>{currentObject.shortId}</p>
                <p className='break-words'>{currentObject.redirectURL}</p>
                <p>{currentObject.clicks}</p>
              </div>
            ))
          }
          {
          entries.length === 0 && 
            <p className='my-10 text-center'>No URLs</p>
          }
        </div>
      </section>
      <p className='text-red-500 text-center'>{errorMessage}</p>
    </div>
  )
}

export default Analytics