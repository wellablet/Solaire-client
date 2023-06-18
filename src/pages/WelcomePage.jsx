import React from 'react';
import Logo from '../assests/solaire.png';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex flex-col w-full bg-primary h-screen">
      <div className="flex-grow flex items-center justify-center">
        <img src={Logo} className="w-100" alt="" />
      </div>
      <div className="flex-grow-0 flex items-center justify-center bg-primary-300">
        <div className="p-4 mb-12">
          <Link to="/users/sign_in" className="bg-white ml-5 text-primary text-2xl font-bold px-24 py-6 rounded-md">Let's start</Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;