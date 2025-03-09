import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginAsync, updateUserInfo } from '../../store/userSlice';
import { AppDispatch } from '../../store';

export const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginAsync(formData)).unwrap();
      console.log(result)
      if (result) {
        dispatch(updateUserInfo(result.data.user))
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      // You can set an error state here to show to the user
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F5F5] p-4 text-right">
      <div className="w-[365px] bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-10">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 
              className="text-[24px] leading-[27px] font-semibold text-[#05172C] "
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              כניסה
            </h1>
            <div className="w-[54px] h-[3px] bg-[#00BAFF] ml-auto" />
          </div>

          <div className="w-full h-px bg-[#D2D2D2] my-2" />

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label 
                id="email"
                htmlFor="email" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                אימייל:
              </label>
              <input
                type="email"
                id="email"
                placeholder="israelisraeli@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="input-right-placeholder w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="password" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                סיסמא:
              </label>
              <input
                type="password"
                id="password"
                placeholder="************"
                value={formData.password}
                onChange={handleChange}
                className="input-right-placeholder w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px] mt-2 shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)]"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              כניסה
            </button>

            <div className="w-full h-px bg-[#D2D2D2] my-2" />

            {/* Social Login Buttons */}
            <button
              type="button"
              className="w-full h-[53px] border border-[#778080] text-[#778080] rounded-full font-semibold text-[20px] leading-[29px] flex items-center justify-center gap-2"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              <FaGoogle className="text-[13px]" />
              <span>כניסה עם גוגל</span>
            </button>

            <button
              type="button"
              className="w-full h-[53px] border border-[#778080] text-[#778080] rounded-full font-semibold text-[20px] leading-[29px] flex items-center justify-center gap-2"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              <FaApple className="text-[13px]" />
              <span>כניסה עם אפל</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
