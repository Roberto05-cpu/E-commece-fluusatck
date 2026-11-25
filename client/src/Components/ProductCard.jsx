import React from "react";
import {HiOutlineEye} from  'react-icons/hi'
import { BiHeart } from 'react-icons/bi'
import { FaStar } from "react-icons/fa";

const ProductCard = ({nbre,img,name,oldPrice,newPrice}) => {
  return (
    <div className="w-[280px] h-[350px]">
      <div className="w-[280px] h-[250px] bg-gray-200 p-3">
        <div className="flex justify-between">
          <button className="bg-red-500 w-[55px] h-[25px] text-white rounded-[5px]">
            {nbre}%
          </button>
          <div className="flex flex-col gap-2">
            <HiOutlineEye className="text-[20px]" />
            <BiHeart className="text-[20px]" />
          </div>
        </div>
        <img src={img} className="w-[180px] h-[180px] mx-auto" alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-[14px]">{name}</h3>
        <div className="text-[14px] flex items-center gap-2">
          <span className="text-red-500">${newPrice}</span>
          <span className="line-through">${oldPrice}</span>
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
  );
};

export default ProductCard;
