import React from 'react';
import LoginBg from '../../assets/loginandRegisterBg.png';
import Logo from '/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-md p-8 pt-20 md:pt-24">
        {/* Logo Positioned on Top Center */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2   rounded-full flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-[200px] h-[100px] object-contain" />
        </div>

        <h2 className="text-center text-xl font-semibold mb-1">Login to Account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please enter your email and password to continue
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
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-700">Password</label>
              <button type="button" className="text-sm text-gray-500 hover:underline">
                Forget Password?
              </button>
            </div>
            <input
              type="password"
              defaultValue="12345678"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="remember" className="accent-purple-600" />
            <label htmlFor="remember" className="text-gray-700">
              Remember Password
            </label>
          </div>

          <button
            type="submit"
            onClick={()=>navigate("/dashboard")}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{' '}
            <p className="text-indigo-600 font-medium hover:underline" onClick={()=>navigate('/signup')}>
              Create Account
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
