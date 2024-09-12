import { Link } from 'react-router-dom';
import React from 'react'

const OrdersPage = () => {
  return (
    <div className="m-auto,display flex flex-col items-center justify-center w-auto h-auto mt-[20px]">
      <Link to="/home" href="#" className=" flex items-center justify-center w-[120px] h-[100px] px-[10px] py-[5px] hover:border hover:border-gray-300 hover:rounded-sm hover:h-[90%] hover:flex">
        <img
          className="amazonLogo invert-[100%]"
          src="/Amazon-logo.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="border-[1px] border-solid border-white rounded-[10px] w-[296px] h-auto py-[20px] px-[26px] text-sm">
        <h1 className="w-[100%] text-[28px] font-sm mt-[0px] mx-[0px] mb-[10px] pt-[0px] px-[0px] pb-[10px]">Sign in</h1>
        <form className="flex flex-col w-[100px] h-auto">
          <label htmlFor="email" className="text-[13px] pt-[0px] pr-[0px] pb-[2px] pl-[2px]">Email or mobile phone number:</label>
          <input className="w-[296px] h-[30px] py-[3px] px-[7px] bg-[E8F0FE] rounded-[2px]"
            type="email"
            id="email"
            name="email"
            required
          />
        </form>

        <div className="w-[100%] h-auto font-[13px] mt-[0px] mr-[0px] mb-[22px] ml-[0px]">
          
          <button type="submit" className="bg-[#FFD814] w-[294px] h-[30px] py-[1px] px-[6px] mt-[15px] rounded-[7px] text-sm">Continue</button>

          <div className="w-[100%] h-auto font-[12px] mt-[18px] mx-[0px]">
            By continuing, you agree to <a href="#">Amazon&apos;s Conditions of Use</a> and <a href="#">Privacy Notice.</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
