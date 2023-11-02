import Link from "next/link";
import Image from "next/image";



export default function Home () {
  return (
    <>
    <header>
      <nav className="bg-black border-b-2 border-[#1C1C1C] fixed justify-evenly h-[80px] w-full flex flex-row items-center">
        
          <div className="flex flex-row items-center gap-[80px] mr-52">
          <Image className= 'w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/menu.svg"
            alt=""
            width = {200}
            height= {100}
          />

          <Image className= 'w-[140px] h-[50px]'
            src="/img/StartApp-Logo-lg.png"
            alt=""
            width = {200}
            height= {100}
          />
          </div>

          <div className="flex flex-row items-center gap-[80px] ml-56">
          <Image className= 'w-9 h-9 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/search.svg"
            alt=""
            width = {200}
            height= {100}
          />
          <Image className= 'w-[3px] h-[46px]'
            src="/img/palito.png"
            alt=""
            width = {200}
            height= {100}
            />

          </div>

          <div className="flex flex-row items-center gap-[40px] mr-10">
          <Image className= 'w-12 h-12 opacity-100 active:opacity-30'
            src="/svg/notification.svg"
            alt=""
            width = {200}
            height= {100}
            />

          <Image className= 'w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/plus.svg"
            alt=""
            width = {200}
            height= {100}
            />

          <Image className= 'w-10 h-10 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/user.svg"
            alt=""
            width = {200}
            height= {100}
            />
          </div>
      </nav>
          </header>
      
      <main className="bg-[#0A090B] h-screen w-screen">
        <section className="w-screen mt-[80px] h-60 border-b-2 border-b-[#1C1C1C] shadow-lg">
          <div className="w-screen flex gap-96">
            <h1 className=" ml-[87px] mt-12 text-transparent text-[50px] font-red bg-clip-text bg-gradient-to-r from-primaryv to-white to-90% static">Notifications</h1>
            <button className="ml-96 mt-16">
              <Link className="text-white/70 hover:text-white active:text-white/30 font-red text-[18px] text-center underline" href="/signup">Mark as read</Link>
            </button>
          </div>
          
          <ul className="flex flex-row list-none gap-[40px] text-[20px] items-center mt-16">
            <li className="ml-[92px] px-[5px]">All</li>
            <li className="text-white/70 hover:text-white active:text-white/30">Unread</li>
            <li className="text-white/70 hover:text-white active:text-white/30">Acepted</li>
            <li className="text-white/70 hover:text-white active:text-white/30">Declined</li>
            <span className="absolute top-[318px] w-20 h-0.5 bg-primaryv transition-all duration-300 ease-out translate-x-[67px]"></span>
            <li className="text-white/70 hover:text-white active:text-white/30 ml-[632px]">Search</li>
            <li>
              <Image className= 'w-8 h-8 opacity-50 hover:opacity-100 active:opacity-30'
               src="/svg/configuration.svg"
               alt=""
               width = {200}
               height= {100}
               />
            </li>
          </ul>

        </section>
      </main>
    </>
  )
}