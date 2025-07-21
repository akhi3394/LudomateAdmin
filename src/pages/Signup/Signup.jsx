import React from 'react';
import LoginBg from '../../assets/loginandRegisterBg.png';
import Logo from '/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate()
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-md p-8 pt-20 md:pt-24">
        {/* Logo at Top Center */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2  rounded-full flex items-center justify-center ">
          <img src={Logo} alt="Logo" className="w-[200px] h-[100px] object-contain" />
        </div>

        <h2 className="text-center text-xl font-semibold mb-1">Create an Account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create an account to continue
        </p>

        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-700">Email address:</label>
            <input
              type="email"
              defaultValue="esteban_schiller@gmail.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              defaultValue="********"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="terms" className="accent-purple-600" />
            <label htmlFor="terms" className="text-gray-700">
              I accept terms and conditions
            </label>
          </div>

          <button
            type="submit"
            onClick={()=>navigate('/dashboard')}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <p href="#" className="text-indigo-600 font-medium hover:underline" onClick={()=>navigate('/login')}>
              Login
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
