import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "../../components/Input";
import Icons from "../../components/Icons";
import MultiSelectInput from "../../components/MultiSelectInput";

export default function Signup() {
  return (
    <main className="flex justify-center my-8">
      <article className="flex flex-col align-middle justify-center bg-gradient-to-b from-purple-800 from-20% via-violet to-gray-700 p-8 px-12 rounded-lg shadow-2xl">
        <div className="flex justify-center">
          <Image
            src={"/img/StartApp-Logo-lg.png"}
            width={200}
            height={64}
            alt="Picture of the author"
          />
        </div>
        <section className="flex flex-col justify-center align-middle">
          <div className="flex justify-center align-middle">
            <h2 className="font-semibold text-xl">Sign Up</h2>
          </div>
          <div className="flex my-2 flex-col justify-center align-middle mx-8">
            {/* Componente Input */}
            <Input title="USERNAME" placeHolder="Enter your Username" />
            <Input title="EMAIL" placeHolder="Enter your Email" />
            <Input title="PASSWORD" placeHolder="Enter your Password" />
            <MultiSelectInput />
          </div>
          <div className="mb-3">
            <Icons />
          </div>
          <div className="flex align-middle justify-center flex-col">
            <button className="w-56 my-1 mx-16 py-2.5 bg-darker-purple rounded-lg text-base font-semibold">
              <Link href="/">Sign Up</Link>
            </button>
            <h6 className="flex align-middle justify-center text-sm text-gray-200">
              Already have an account?
              <span className="mx-1 text-blue">
                <Link href="/login">Login</Link>
              </span>
            </h6>
          </div>
        </section>
      </article>
    </main>
  );
}
