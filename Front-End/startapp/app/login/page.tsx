import Link from "next/link";
import Image from "next/image";
import {Input, PasswordInput} from "../../components/Form";
import Icons from "../../components/Icons";

export default function login() {
  return (
    <main className="bg-gradient-to-br from-purple-800 via-violet to-gray-700 flex justify-around h-screen items-center">
      <div className="ml-24 flex flex-col align-middle justify-center">
        <Image
          src={"/img/StartApp-Logo-lg.png"}
          width={400}
          height={200}
          alt="Picture of the author"
        />
        <h2 className="text-3xl font-medium tracking-wide font-raleway ml-16">
          Develop Your Dreams
        </h2>
      </div>
      <article className="bg-gray-700 border-2 border-white p-10 py-18 rounded-lg shadow-2xl items-center">
        <section className="flex flex-col justify-center align-middle">
          <div className="flex flex-col float-left align-middle mb-6 font-raleway">
            <Image
              src="/img/StartApp-Logo-sm.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="ml-96"
            />
            <h2 className="font-medium text-3xl tracking-wide">Login</h2>
            <h6 className="text-gray-50">
              Want to Create an Account?
              <span className="mx-1 text-blue">
                <Link href="/signup">Sign Up</Link>
              </span>
            </h6>
          </div>
          <div className="flex mt-2 flex-col justify-center align-middle mx-8">
            {/* Componente Input */}
            <Input
              title="USERNAME or EMAIL"
              placeHolder="Enter your Username or Email"
            />
            <PasswordInput />
          </div>
          <div className="flex flex-row justify-between">
            <h6 className="text-sm text-gray-200 ml-10">Remember Me</h6>
            <h6 className="text-sm text-blue mr-10">Forgot Password?</h6>
          </div>
          <div className="mb-3 mt-3">
            <Icons />
          </div>
          <div className="flex justify-center items-center flex-col">
            <Link href="/">
              <button className="w-72 mt-3 mb-6 py-3 bg-darker-purple rounded-lg">
                <h4 className="text-xl tracking-wide font-[550]">Login</h4>
              </button>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
