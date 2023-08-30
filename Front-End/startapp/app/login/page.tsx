import Link from "next/link";
import Image from "next/image";
import Input from "../../components/Input";
import Icons from "../../components/Icons";

export default function login() {
  return (
    <main className="flex justify-center my-8">
      <article className="flex flex-col justify-center bg-gradient-to-b from-purple-800 from-20% via-violet to-gray-700 p-4 rounded-lg w-96 shadow-2xl">
        <div className="grid grid-cols-3 grid-rows-3">
          <Image
            src="/img/StartApp-Logo-sm.png"
            width={50}
            height={50}
            alt="Picture of the author"
            className="col-start-1 row-start-1 row-span-3"
          />
          <h2 className="col-start-2 row-start-2 text-xl font-semibold ml-6">
            Login
          </h2>
        </div>
        <section>
          <div className="flex flex-col ml-8">
            {/* Componente Input */}
            <Input title="USERNAME" placeHolder="Enter your Username or Email" />
            <Input title="PASSWORD" placeHolder="Enter your Password" />
          </div>
          <div className="flex flex-row justify-between">
            <h6 className="text-sm text-gray-200 ml-10">Remember Me</h6>
            <h6 className="text-sm text-blue mr-10">Forgot Password?</h6>
          </div>
          <div className="mt-3">
            {/* Iconos de la Autenticacion */}
            <Icons />
          </div>
          <div className="flex align-middle justify-center flex-col">
            <button className="w-56 mt-4 mb-1 mx-16 py-2.5 bg-darker-purple rounded-lg text-base font-semibold">
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
    </main>
  );
}
