import Link from "next/link";
import Input from "./SignUp"

export default function Login() {
  return (
    <section className="bg-gradient-to-b from-purple-800 from-20% via-violet to-gray-700 flex justify-center p-8 rounded-lg w-96 shadow-2xl">
      <div>{/* Componente Image */}</div>
      <section>
        {/* Titulo, Inputs, Boton*/}
        <div className="flex justify-center align-middle">
          <h3 className="font-semibold">Login</h3>
        </div>
        <div className="flex my-2 flex-col">
          {/* Componente Input */}
          <Input title="USERNAME" placeHolder="Enter your Username or Email" />
          <Input title="PASSWORD" placeHolder="Enter your Password" />
        </div>
        <div>
            <button>
                {/* checkbox */}
            </button>
            <h6 className="flex align-middle justify-center text-sm text-gray-200">
                Remember Me
            </h6>
        </div>
        <div>
        <h6 className="flex align-middle justify-center text-sm text-blue">
                Forgot Password
            </h6>
        </div>
        <div>
          {/* Iconos de la Autenticacion */}
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="flex align-middle justify-center flex-col">
          <button className="my-2 mx-2.5 py-2.5 bg-darker-purple rounded-lg text-sm">
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
    </section>
  );
}
