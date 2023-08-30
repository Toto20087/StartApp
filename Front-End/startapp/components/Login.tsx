import Link from "next/link";
import Input from "./Input"
import Image from 'next/image'

export default function Login() {
  return (
    <article className="flex flex-col justify-center bg-gradient-to-b from-purple-800 from-20% via-violet to-gray-700 p-4 rounded-lg w-96 shadow-2xl">
      <section>
        {/* Titulo, Inputs, Boton*/}
        <div className="flex justify-between">
          <Image
            src="/img/2-removebg-preview.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <h3 className="flex align-bottom font-semibold mr-36">Login</h3>
        </div>
        <div className="flex flex-col">
          {/* Componente Input */}
          <Input title="USERNAME" placeHolder="Enter your Username or Email" />
          <Input title="PASSWORD" placeHolder="Enter your Password" />
        </div>
        <div className="flex flex-row justify-between">
            <h6 className="text-sm text-gray-200">
                Remember Me
            </h6>
            <h6 className="text-sm text-blue">
                Forgot Password?
            </h6>
        </div>
        <div className="">
          {/* Iconos de la Autenticacion */}
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="flex align-middle justify-center flex-col">
          <button className="my-2 mx-2.5 py-2.5 bg-darker-purple rounded-lg text-sm">
            <Link href="/">Login</Link>
          </button>
          <h6 className="flex align-middle justify-center text-sm text-gray-200">
            Don't have an account?
            <span className="mx-1 text-blue">
              <Link href="/signup">Sign Up</Link>
            </span>
          </h6>
        </div>
      </section>
    </article>
  );
}
