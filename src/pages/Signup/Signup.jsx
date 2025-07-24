import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import LoginBg from '../../assets/loginandRegisterBg.png';
import Logo from '/Logo.svg';
import { useSignupMutation } from '../../redux/slices/apiSlice';

const VALIDATION_ERRORS = {
  REQUIRED: 'Please fill in all fields',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters long',
  TERMS_REQUIRED: 'You must accept the terms and conditions',
};

const Signup = () => {
  const navigate = useNavigate();
  const [signup, { isLoading, error }] = useSignupMutation();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = useCallback((data) => {
    if (!data.email || !data.username || !data.password) {
      return VALIDATION_ERRORS.REQUIRED;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return VALIDATION_ERRORS.INVALID_EMAIL;
    }
    if (data.password.length < 8) {
      return VALIDATION_ERRORS.INVALID_PASSWORD;
    }
    if (!termsAccepted) {
      return VALIDATION_ERRORS.TERMS_REQUIRED;
    }
    return '';
  }, [termsAccepted]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setTermsAccepted(checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setErrorMessage('');
  }, []);

  const handleSignup = useCallback(
    debounce(async () => {
      const validationError = validateForm(formData);
      if (validationError) {
        setErrorMessage(validationError);
        return;
      }
      try {
        const payload = {
          email: formData.email.trim(),
          fullName: formData.username.trim(),
          password: formData.password,
        };
        await signup(payload).unwrap();
        navigate('/login', { replace: true });
      } catch (err) {
        setErrorMessage(err.data?.message || 'Signup failed. Please try again.');
      }
    }, 300),
    [formData, termsAccepted, signup, navigate]
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-md p-8 pt-20 md:pt-24">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-[200px] h-[100px] object-contain" />
        </div>

        <h2 className="text-center text-xl font-semibold mb-1">Create an Account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create an account to continue
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
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
              autoComplete="username"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
              autoComplete="new-password"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="accent-purple-600"
              checked={termsAccepted}
              onChange={handleChange}
              disabled={isLoading}
            />
            <label htmlFor="terms" className="text-gray-700">I accept terms and conditions</label>
          </div>

          <button
            type="button"
            onClick={handleSignup}
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
                Signing Up...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
          )}

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <button
              type="button"
              className="text-indigo-600 font-medium hover:underline"
              onClick={() => navigate('/login')}
              disabled={isLoading}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;