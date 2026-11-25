import React from "react";
import logoIphone from "../assets/logo-iphone-removebg-preview.png";
import iphone from "../assets/iphone-removebg-preview.png";
import x3 from "../assets/X3-removebg-preview.png";
import clavier from "../assets/Clavier-removebg-preview.png";
import casque from "../assets/Casque-removebg-preview.png";
import ecran from "../assets/ecran-removebg-preview.png";
import camera1 from "../assets/camera-1.jpg";
import phone4 from "../assets/phone-4.jpg";
import gaming7 from "../assets/gaming-7.jpg";
import {
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineDeviceMobile,
  HiOutlineCamera,
} from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { PiGameControllerLight } from "react-icons/pi";
import { LuHeadphones, LuWatch } from "react-icons/lu";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="flex gap-10">
        <div className="md:ml-[100px] w-[20%] border-r border-r-gray-400 pt-8 hidden md:block">
          <ul className="flex flex-col gap-3">
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Medecine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="pt-8 md:mr-[100px] md:w-[80%]">
          <div className="bg-black w-full h-[300px] py-10 px-16 text-white flex items-center gap-2">
            <div className="flex-1">
              <div className="ml-[-13px] flex gap-3 items-center">
                <img src={logoIphone} className="w-[70px] h-[70px]" alt="" />
                <span>Iphone 14 Series</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold tracking-[2px]">
                  Up to 10% <br /> off Voucher
                </h1>
              </div>
              <div className="flex gap-1 items-center mt-5">
                <a href="" className="border-b border-b-white">
                  Shop Now
                </a>
                <HiOutlineArrowRight />
              </div>
            </div>
            <div className="flex-1">
              <img src={iphone} className="w-[496px] h-[352px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:ml-[100px] border-b border-b-gray-400 pb-16">
        <div className="">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[40px] bg-red-500"></div>
            <p className="text-red-500">Today's</p>
          </div>
          <div className="flex items-center md:gap-32 gap-16 mt-4 md:p-0 p-3">
            <p className="font-semibold text-4xl">Flash Sales</p>
            <div className="flex items-center mt-[-15px]">
              <div className="flex flex-col">
                <p className="text-[10px]">Days</p>
                <span className="font-semibold text-4xl">
                  03 <span className="text-red-500">:</span>
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px]">Hours</p>
                <span className="font-semibold text-4xl">
                  23 <span className="text-red-500">:</span>
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px]">Minutes</p>
                <span className="font-semibold text-4xl">
                  19 <span className="text-red-500">:</span>
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px]">Seconds</p>
                <span className="font-semibold text-4xl">56</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center md:flex-row md:gap-17">
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img src={x3} className="w-[180px] h-[180px] mx-auto" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img
                src={casque}
                className="w-[180px] h-[180px] mx-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img
                src={clavier}
                className="w-[180px] h-[180px] mx-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img src={ecran} className="w-[180px] h-[180px] mx-auto" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="py-2 px-4 bg-red-500 text-white ml-[-45px] cursor-pointer">
            <Link to="/allproducts">View All Products</Link>
          </button>
        </div>
      </div>
      <div className="md:ml-[100px] md:mr-[100px] mt-16 border-b border-b-gray-400 pb-16">
        <div className="flex gap-2 items-center">
          <div className="w-[20px] h-[40px] bg-red-500"></div>
          <p className="text-red-500">Categories</p>
        </div>
        <p className="font-semibold text-4xl mt-5 p-3 md:p-0">
          Browse By Categories
        </p>
        <div className="mt-8 flex items-center justify-between flex-col gap-1 md:flex-row">
          <div className="w-[170px] h-[145px] border border-gray-400 flex items-center justify-center hover:bg-red-500 hover:text-white">
            <div className="flex flex-col items-center justify-center">
              <HiOutlineDeviceMobile size={30} />
              <span className="mt-3">Phones</span>
            </div>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 flex items-center justify-center hover:bg-red-500 hover:text-white">
            <div className="flex flex-col items-center justify-center">
              <HiOutlineComputerDesktop size={30} />
              <span className="mt-3">Computers</span>
            </div>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 flex items-center justify-center hover:bg-red-500 hover:text-white">
            <div className="flex flex-col justify-center items-center">
              <LuWatch size={30} />
              <span className="mt-3">SmartWatch</span>
            </div>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 flex items-center justify-center bg-red-500 text-white">
            <div className="flex flex-col justify-center items-center">
              <HiOutlineCamera size={30} />
              <span className="mt-3">Camera</span>
            </div>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 flex items-center justify-center hover:bg-red-500 hover:text-white">
            <div className="flex flex-col justify-center items-center">
              <LuHeadphones size={30} />
              <span className="mt-3">HeadPhones</span>
            </div>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 flex items-center justify-center hover:bg-red-500 hover:text-white">
            <div className="flex flex-col items-center justify-center">
              <PiGameControllerLight size={30} />
              <span className="mt-3">Gaming</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:ml-[100px] md:mr-[100px] mt-16">
        <div className="flex gap-2 items-center">
          <div className="w-[20px] h-[40px] bg-red-500"></div>
          <p className="text-red-500">This Month</p>
        </div>
        <div className="flex justify-between items-center mt-4 p-2 md:p-0">
          <p className="font-semibold text-4xl mt-5">Best Selling Products</p>
          <button className="bg-red-500 text-white py-3 px-10 mt-5 md:mt-0">
            <Link to="/allproducts">View All</Link>{" "}
          </button>
        </div>
        <div className="mt-10 flex flex-col items-center md:flex-row md:gap-17">
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img src={ecran} className="w-[180px] h-[180px] mx-auto" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img
                src={camera1}
                className="w-[180px] h-[180px] mx-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img
                src={phone4}
                className="w-[180px] h-[180px] mx-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[350px]">
            <div className="w-[280px] h-[250px] bg-gray-200 p-3">
              <div className="flex justify-between">
                <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
                  -40%
                </button>
                <div className="flex flex-col gap-2">
                  <HiOutlineEye className="text-[20px]" />
                  <BiHeart className="text-[20px]" />
                </div>
              </div>
              <img
                src={gaming7}
                className="w-[180px] h-[180px] mx-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[14px]">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="text-[14px] flex items-center gap-2">
                <span className="text-red-500">$120</span>
                <span className="line-through">$160</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
                <FaStar size={15} color="#FFD700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
