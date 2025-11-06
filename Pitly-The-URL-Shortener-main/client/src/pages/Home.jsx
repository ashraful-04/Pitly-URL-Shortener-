import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, useStepContext } from '@mui/material';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortId, setShortId] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.startsWith('https://')) {
      setErrorMessage('The URL must start with "https://"')
      return;
    }

    const data = {
      user: user.email,
      url: url
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/url`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseJSON = await response.json();

      setShortId(responseJSON.id);

    } catch (error) {
      console.error(error);
      setErrorMessage('Some error occured!');
    } finally {
      setUrl('');
    }
  }

  return (
  <div className='home'>
      <section className='text-sm flex justify-start'>
        <h3 className='mx-auto'>Welcome, <span className='text-green-500'>{user.email}</span></h3>
      </section>
      <section>
        <h1 className='heading'>Build stronger digital connections</h1>
      </section>
      <section className='h-auto flex justify-center items-center'>
        <div className='card'>
          <section className='font-bold space-y-10'>
            <h2 className='text-2xl'>Shorten a long link <span className='text-blue-500'>{shortId}</span></h2>
            <h4>Paste your long link here</h4>
          </section>
          <section>
            <form action="" onSubmit={(event) => handleSubmit(event)} className='*:block md:w-full'>
              <input className='my-1 p-1 border border-light-border rounded-md w-full h-10 mb-1' type="text" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://example.com" />
              <p className='text-center text-red-500 mb-5'>{errorMessage}</p>
              <Button type='submit' size='medium' variant="contained" endIcon={<ArrowForwardIcon />}>Get your link</Button>
            </form>
          </section>
          <section className='hero font-bold'>
          </section>
        </div>
      </section>
    </div >
  )
}

export default Home