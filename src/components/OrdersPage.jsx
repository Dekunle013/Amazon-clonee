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
      <div className="border-t-[1px] border-solid border-white w-[300px] h-[300px] py-[20px] px-[26px] text-sm">
        <h1 className="text-[24px] font-sm">Sign in</h1>
      </div>
    </div>
  )
}

export default OrdersPage
