"use client"

import { useState } from "react";

const PasswordInput = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleClick = () => {
        setPasswordVisible(!passwordVisible)
    }
return (
    <div className="my-2">
        <h6 className="text-xs font-semibold tracking-widest" >PASSWORD</h6>
        <div className="flex flex-row relative justify-between">
            <input
                className="flex justify-center my-1 w-96 h-12 rounded-md bg-gray-800 text-gray-50 p-2 z-0 "
                type={passwordVisible ? 'password' : 'text'}
                name=""
                id=""
                placeholder="Enter your Password"
            />
            <button onClick={handleClick} className="flex z-10 mt-5 ml-[22rem] absolute"> 
                <img src = {passwordVisible ? "/svg/ojoCerrado.svg" : "/svg/ojoAbierto.svg"} />
            </button>
        </div>
    </div>
    )
};

export default PasswordInput;