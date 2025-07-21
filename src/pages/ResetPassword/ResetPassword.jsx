import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OutlinedInput = ({ label, type, placeholder, value, readOnly }) => {
  const [inputValue, setInputValue] = useState(value || '');
  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-[#1E0909] z-[1]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        readOnly={readOnly}
        className="w-[546px] h-[64px] border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-black bg-white placeholder:text-[#858080] focus:outline-none focus:border-purple-600"
      />
    </div>
  );
};

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can add form validation here later
    navigate('/dashboard');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen "
    style={{
    background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)'
  }}>
      <img src='/LogoDispax.png' alt="Dispax Logo" className="w-[88px] h-[33px] mb-6" />
      <div className="bg-white p-10 rounded-lg text-black w-[578px] min-h-[549px] flex flex-col items-center">
        <h2 className="text-[42px] font-extrabold text-[#000000] mb-5 text-center">Reset Password</h2>

        <div className="w-[546px] flex flex-col">
          <p className="text-center text-[#858080] mb-5">Please enter your email and password to continue</p>

          <OutlinedInput label="Email" type="email" placeholder="Email Address" value="esteban_schiller@gmail.com" readOnly />
          <OutlinedInput label="New Password" type="password" placeholder="Enter Password" />
          <OutlinedInput label="Confirm Password" type="password" placeholder="Confirm Password" />

          <button className="bg-[#6F1AFF] text-white p-2 w-full rounded-[10px] text-[20px] font-bold h-[64px]"
            onClick={handleLogin}
          >Save & Login</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
