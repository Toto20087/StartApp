"use client"

import React, { useState } from "react";
import Link from "next/link"
import MultiSelectInput from "./MultiSelectInput";
import Icons from "./Icons";

const Input = ({
    title,
    placeHolder,
    name,
    value,
    onChange
    }: {
    title: string;
    placeHolder: string;
    name: string;
    value: string;
    onChange: (e:  React.FormEvent) => void;
}) => {
return (
    <div className="my-2">
        <h6 className="text-xs font-semibold tracking-widest font-bebas" >{title}</h6>
        <input
            className="flex justify-center my-1 w-96 h-12 rounded-md bg-gray-800 text-gray-50 p-2"
            type="text"
            name={name}
            value={value}
            id=""
            placeholder={placeHolder}
            onChange={onChange}
        />
    </div>
    );
};

const PasswordInput = ({
    name, 
    value,
    onChange
    } : {
    name : string | undefined; 
    value : string;
    onChange : (e: React.FormEvent) => void;
}) => {
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
                name={name}
                id=""
                placeholder="Enter your Password"
                value={value}
                onChange={onChange}
            />
            <button onClick={handleClick} className="flex z-10 mt-5 ml-[22rem] absolute"> 
                <img src = {passwordVisible ? "/svg/ojoCerrado.svg" : "/svg/ojoAbierto.svg"} />
            </button>
        </div>
    </div>
    )
};


const Form = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      selectedOptions: [],
    });
  
    const handleSubmit = (e : React.FormEvent) => {
      e.preventDefault();
      console.log('Datos del formulario enviados:', formData);
    };
  
    const handleInputChange = (e :  React.FormEvent) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleOptionsChange = (selectedOptions: string[]) => {
        setFormData({ ...formData, selectedOptions });
      };
  
    return (
      <section>
        <form className="flex my-2 flex-col justify-center align-middle mx-8" onSubmit={handleSubmit}>
          {/* Componente Input para el username */}
          <Input
            name="username"
            title="USERNAME"
            placeHolder="Enter your Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {/* Componente Input para el email */}
          <Input
            name="email"
            title="EMAIL"
            placeHolder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {/* Componente PasswordInput */}
          <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div>
            <div className='mt-4'>
                <h6 className="text-xs font-semibold tracking-widest font-bebas" >WHAT DO YOU DO?</h6>
            </div>
            <div className="bg-gray-800 rounded-md text-gray-200 text-sm w-96 h-12 mb-2 my-1">
                <MultiSelectInput
                    name="selectedOptions"
                    options={[
                        { value: 'opcion1', label: 'Back-End dev' },
                        { value: 'opcion2', label: 'Front-End dev' },
                        { value: 'opcion3', label: 'Software dev' },
                    ]}
                    selectedOptions={formData.selectedOptions}
                    onSelectedOptionsChange={handleOptionsChange}
                />
            </div>
          </div>
          <div className="mb-3 mt-3">
            <Icons />
          </div>
          <button type="submit" className="w-72 mt-4 ml-20 py-3 bg-darker-purple rounded-lg">
            <h4 className="text-xl tracking-wide font-[550]">Sign Up</h4>
          </button>
        </form>
      </section>
    );
  };
  

export {Form, Input, PasswordInput};