import Link from "next/link";
import Image from "next/image";

export default function Home () {
  return (
    <>
    <header>
      <nav className='fixed justify-evenly block h-[80px] w-full bg-transparent flex flex-row items-center'> 
        
        <div className="flex flex-row items-center">

          <Image className= 'w-[140px] h-[50px]'
            src="/img/StartApp-Logo-lg.png"
            alt=""
            width = {200}
            height= {100}
          />
        </div>
        <ul className = "flex flex-row list-none gap-[40px] text-[20px] items-center">
          <li className="ml-2 opacity-75 hover:opacity-100">Projects</li>
          <li className="ml-2 opacity-75 hover:opacity-100">People</li>
          <li className="ml-2 opacity-75 hover:opacity-100">About</li>
        </ul>

        <div className="flex flex-row list-none gap-[40px] text-[20px] items-center">
        {
          <button className=" text-primaryv static py-[10px] px-[30px] text-[20px] rounded-[17px] justify-center items-center bg-transparent border-2 border-primaryv font-red">
           <Link href="/signup">Sign In</Link>
          </button>
        }
        </div> 
        <div className="flex flex-row list-none gap-[40px] text-[20px] items-center">
        {
          <button className="static py-[10px] px-[30px] text-[20px] rounded-[17px] justify-center items-center bg-transparent border-slate-500 hover:bg[#151515] font-red">
           <Link href="/login">Log In</Link>
          </button>
        }
        </div>  
      </nav>
    </header>
    <section className="pl-24 bg-gradient-to-br from-black from-50% to-primaryv w-full h-[full]">
      <h1 className="mt-[184px] mb-[27px] flex flex-col static w-[838px]text-white text-[70px] justify-center font-semibold text-7xl font-red">Build your own team project</h1>
      <div>
      <p className="static mb-[47px] font-red w-[829px] h-[80px] font-red text-white text-[30px]">
        Connect ideas with people to create starups and unique entrepeneurships.
      </p>
      </div>
      <div className="flex itemx-center gap-2">
        {
          <button className="static w-[185px] h-[67px] rounded-[20px] flex justify-center items-center bg-primaryv hover:opacity-75 font-semibold">
           <Link className=" static text-black font-red font-normal text-[25px] text-center my-4 mx-6" href="/signup">Get Started</Link>
          </button>
        }
        {
          <button className=" static w-[185px] h-[67px] rounded-[17px] flex justify-center items-center bg-trasparent decoration-solid hover:opacity-75 font-semibold">
           <Link className=" static text-black font-red font-normal text-[25px] text-center my-4 mx-6" href="/signup">Learn About</Link>
          </button>
        }
      </div>
      <Image className= 'w-[881px] h-[776px] ml-[350px]'
            src="/img/Imagen Vectorial.png"
            alt=""
            width = {200}
            height= {100}
          />
    </section>
    </>
  )
}
