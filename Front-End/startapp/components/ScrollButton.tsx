'use client'
import React, { useState, useEffect } from "react";

const ScrollButton = () => {
    const handleScroll = () => {
      window.scrollTo({
        top: window.innerHeight, // Cambia el valor según tu necesidad
        behavior: 'smooth', // Hace que el desplazamiento sea suave
      });
    };
  
    return (
      <button className="font-red text-[21px] text-center text-primaryv hover:text-primaryv/70 active:text-primaryv/30 w-[170px] h-[55px] rounded-[35px] flex justify-center items-center underline" onClick={handleScroll}>Learn About
      </button>
    );
  };
  
  export default ScrollButton;