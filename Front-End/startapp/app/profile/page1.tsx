import Link from "next/link";
import Image from "next/image";



export default function Home () {
  return (
    <>
    <header>
      <nav className="bg-black fixed justify-evenly h-[80px] w-full flex flex-row items-center">
        {
          <div className="flex flex-row items-center">
          <Image className= 'w-[140px] h-[50px]'
            src="/img/StartApp-Logo-lg.png"
            alt=""
            width = {200}
            height= {100}
          />
        </div>
        }
      </nav>
          </header>
    </>
  )
}