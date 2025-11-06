import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { logoTransparentLarge } from '../assets/images';

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="auth h-screen bg-background text-text p-2">
      <div className={`wrapper h-full bg-[url('../assets/images/stars.svg')] bg-contain bg-repeat flex flex-col justify-center items-center space-y-3`}>
        <img src={logoTransparentLarge} alt="Large tranparent logo of Pitly: The URL shortener." />
        <h1 className="text-2xl text-center font-semibold">WELCOME TO PITLY: THE URL SHORTENER</h1>
        <button className="bg-button p-2 rounded-md hover:bg-button-hover cursor-pointer"
          onClick={() => loginWithRedirect()}>Authenticate</button>
      </div>
    </div >
  );
};

export default Auth;