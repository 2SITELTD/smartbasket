import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressIndicator } from '../questionaire/ProgressIndicator';
import { Card } from '../../ui/card';
import { updateUserInfo, selectUserDetails, updateShippingDetails } from '../../../store/userSlice';
import { OrderSummary } from './OrderSummary';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../ui/select';


export const CheckoutForm: React.FC = () => {
  const [areaCode, setAreaCode] = useState('050');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNext = () => {

    navigate('/checkout/payment');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
        if((name === 'street' || name === 'city' || name === 'postalCode' || name === 'houseNumber')){
          console.log(name, value)
          dispatch(updateShippingDetails({ [name]: value }));
        } else if(name === 'phone' || name === 'phoneAreaCode'){
          setPhoneNumber(value);
          dispatch(updateUserInfo({ phone: `${areaCode}-${value}` }));
        }
        else{
          dispatch(updateUserInfo({ [name]: value }));
        }
  };

  return (
    <div className="flex flex-col w-full max-w-[1124px] mx-auto gap-[30px] text-right">
      {/* Progress Indicator */}
      <div className="flex justify-center">
        <ProgressIndicator currentStep={1} totalSteps={3} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row gap-[30px]">
        {/* Left Column */}
        <div className="flex flex-col gap-[30px] w-full lg:w-[365px]">
          {/* Delivery Method Card */}
          <Card className="p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-[11px]">
                <h2 
                  className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                >
                  שיטת משלוח
                </h2>
                <div className="h-[3px] w-[124px] bg-[#00BAFF] ml-auto" />
              </div>
              <div className="p-5 bg-white shadow-md rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                    אקספרס
                  </span>
                  <span className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                    ₪35
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Order Summary */}
          <OrderSummary />
        </div>

        {/* Right Column - Form */}
        <Card className="flex-1 p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[11px]">
              <h2 
                className="text-[24px] leading-[27px] font-semibold text-[#05172C] "
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                פרטי משלוח
              </h2>
              <div className="h-[3px] w-[117px] bg-[#00BAFF] ml-auto" />
            </div>
            <div className="h-[1px] w-full bg-[#D2D2D2]" />
            
            <div className="p-5 bg-white shadow-md rounded-lg">
              <form className="flex flex-col gap-4">
                {/* First Line */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Select
                  name="phoneAreaCode"
                  defaultValue={areaCode}
                  onValueChange={(value) => {
                    setAreaCode(value);
                    dispatch(updateUserInfo({ phone: `${value}-${phoneNumber}` }));
                  }}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="קידומת" />
                  </SelectTrigger>
                  <SelectContent className="input-right-placeholder bg-white opacity-100">
                    <SelectItem value="050">050</SelectItem>
                    <SelectItem value="051">051</SelectItem>
                    <SelectItem value="052">052</SelectItem>
                    <SelectItem value="053">053</SelectItem>
                    <SelectItem value="054">054</SelectItem>
                    <SelectItem value="055">055</SelectItem>
                  </SelectContent>
                </Select>
                
                <input
                  type="text"
                  name="phone"
                  placeholder="טלפון"
                  className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                  value={phoneNumber}
                  onChange={handleChange}
                />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="שם משפחה"
                    className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="שם פרטי"
                    className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    onChange={handleChange}
                  />


                </div>

                {/* Second Line */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    name="postalCode"
                    placeholder="מיקוד"
                    className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="houseNumber"
                    placeholder="מספר דירה"
                    className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="כתובת אימייל"
                    className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    onChange={handleChange}
                  />

                </div>

                {/* Third Line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="street"
                    placeholder="כתובת"
                    className="input-right-placeholder w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] ml-auto"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    onChange={handleChange}
                  />
                  <Select
                    name="city"
                    defaultValue="תל אביב"
                    onValueChange={(value) => {
                      dispatch(updateShippingDetails({ city: value }));
                    }}
                  >
                    <SelectTrigger className="h-12 flex flex-row-reverse justify-between">
                      <SelectValue placeholder="עיר מגורים" />
                    </SelectTrigger>
                    <SelectContent className='input-right-placeholder bg-white opacity-100'>
                      <SelectItem value="תל אביב">תל אביב</SelectItem>
                      <SelectItem value="ירושלים">ירושלים</SelectItem>
                      <SelectItem value="חיפה">חיפה</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                
              </form>
            </div>
          </div>
        </Card>
      </div>
      {/* Continue Button */}
      <button
                  onClick={(e) => {
                    e.preventDefault();
                    onNext();
                  }}
                  className="w-[90%] h-[52px] bg-[#00BAFF] mx-auto mb-5 text-white rounded-full font-semibold text-[20px] leading-[29px] mt-4"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  המשך לתשלום
                </button>
    </div>
  );
};
