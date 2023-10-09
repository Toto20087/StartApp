import Link from "next/link";
import Image from "next/image";

import {Input, PasswordInput, Form} from "../../components/Form";
import Icons from "../../components/Icons";
import MultiSelectInput from "../../components/MultiSelectInput";

export default function Signup() {
  return (
    <main className="bg-gradient-to-br from-purple-800 via-violet to-gray-700 flex items-center justify-around">
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
      <article className="bg-gray-700 border-2 border-white p-14 rounded-lg shadow-2xl mt-8 mb-8 ">
        <section className="flex flex-col justify-center align-middle">
          <div className="flex flex-col float-left align-middle mb-6 font-raleway">
            <h2 className="font-medium text-4xl tracking-wide">Sign Up</h2>
            <h6 className="text-gray-50">
              Already have an account?
              <span className="mx-1 text-blue">
                <Link href="/login">Login</Link>
              </span>
            </h6>
          </div>
          <div className="flex my-2 flex-col justify-center align-middle mx-8">
            {/* Componente Input */}
            <Form/>
          </div>
        </section>
      </article>
    </main>
  );
}
