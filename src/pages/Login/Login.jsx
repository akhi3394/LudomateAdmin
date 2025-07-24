import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import LoginBg from '../../assets/loginandRegisterBg.png';
import Logo from '/Logo.svg';
import { useLoginMutation } from '../../redux/slices/apiSlice';
import { setCredentials } from '../../redux/slices/authSlice';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';

const VALIDATION_ERRORS = {
  REQUIRED: 'Please fill in all fields',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters long',
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = useCallback((data) => {
    if (!data.email || !data.password) {
      return VALIDATION_ERRORS.REQUIRED;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return VALIDATION_ERRORS.INVALID_EMAIL;
    }
    if (data.password.length < 8) {
      return VALIDATION_ERRORS.INVALID_PASSWORD;
    }
    return '';
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrorMessage('');
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const performLogin = useCallback(async () => {
    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      console.error('Validation failed:', validationError);
      return;
    }
    try {
      const response = await login({
        email: formData.email.trim(),
        password: formData.password,
      }).unwrap();
      console.log('Login API response:', response);
      if (response && response.accessToken && response.data) {
        dispatch(setCredentials({
          user: response.data,
          accessToken: response.accessToken,
        }));
        console.log('Token dispatched successfully:', response.accessToken);
        navigate('/dashboard', { replace: true });
      } else {
        setErrorMessage('Invalid response from server: Missing accessToken or data');
        console.error('Invalid response structure:', response);
      }
    } catch (err) {
      const errorMsg = err.data?.message || 'Login failed. Please check your credentials.';
      setErrorMessage(errorMsg);
      console.error('Login error:', err);
    }
  }, [formData, login, dispatch, navigate]);

  const handleLogin = debounce(performLogin, 300);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-md p-8 pt-20 md:pt-24">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-[200px] h-[100px] object-contain" />
        </div>

        <h2 className="text-center text-xl font-semibold mb-1">Login to Account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please enter your email and password to continue
        </p>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-gray-700">Email address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-700">Password</label>
              <button
                type="button"
                className="text-sm text-gray-500 hover:underline"
                onClick={() => navigate('/reset-password')}
                disabled={isLoading}
              >
                Forget Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                disabled={isLoading}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="accent-purple-600"
              disabled={isLoading}
            />
            <label htmlFor="remember" className="text-gray-700">Remember Password</label>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
          )}

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{' '}
            <button
              type="button"
              className="text-indigo-600 font-medium hover:underline"
              onClick={() => navigate('/signup')}
              disabled={isLoading}
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;