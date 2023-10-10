import Link from "next/link";
import Image from "next/image";

export default function Home () {
  return (
<<<<<<< Updated upstream
    <article id="">
      <section className="pl-24 bg-gradient-to-br from-black from-50% to-primaryv w-full h-[1232px]" id="__next">
        <nav></nav>
        <h1 className="mt-[184px] flex flex-col relative w-[838px] top-0 left-0 text-white text-[70px] tracking-[0] justify-center shrink-0 font-semibold text-7xl not-italic leading-normal [font-family:'Red_Hat_Display-SemiBold',_Helvetica]">Build your own team project</h1>
        <div>
        <p className="relative w-[829px] h-[80px] top-0 left-0 [font-family:'Red_Hat_Display-Regular',_Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]">
          Conect ideas with people to create starups and unique entrepeneurship.
        </p>
        </div>
        <div>
          {
            <button className="relative w-[185px] h-[67px] rounded-[17px] border-0 border-none flex justify-center items-center bg-primaryv hover:bg-[#3B005E] font-semibold">
            <Link className="text-black relative h-[30px] top-0 left-0 [font-family:'Inter-Regular',_Helvetica] font-normal text-[25px] text-center tracking-[0] leading-[normal] whitespace-nowrap my-4 mx-6" href="/signup">Get Started</Link>
            </button>
          }
        </div>
      </section>
    </article>
=======
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
          <button className=" text-primaryv opacity-75 hover:text-black static py-[13px] px-[34px] text-[20px] rounded-[17px] justify-center items-center bg-transparent border-2 border-primaryv hover:bg-primaryv font-red">
           <Link href="/signup">Sign In</Link>
          </button>
        }
        </div> 
        <div className="flex flex-row list-none gap-[40px] text-[20px] items-center">
        {
          <button className="static py-[13px] px-[34px] text-[20px] rounded-[17px] justify-center items-center bg-transparent hover:bg-[#3B005E] font-red">
           <Link className="text-[20px] opacity-75 hover:opacity-100" href="/signup">Log In</Link>
          </button>
        }
        </div>  
      </nav>
    </header>
    <section className="pl-24 bg-gradient-to-br from-black from-50% to-primaryv w-full h-[1232px]">
      <h1 className="mt-[184px] mb-[27px] flex flex-col relative w-[838px]text-white text-[70px] justify-center font-semibold text-7xl font-red">Build your own team project</h1>
      <div>
      <p className="static mb-[47px] font-red w-[829px] h-[80px] font-red text-white text-[30px]">
        Connect ideas with people to create starups and unique entrepeneurships.
      </p>
      </div>
      <div>
        {
          <button className="inline static w-[185px] h-[67px] rounded-[17px] flex justify-center items-center bg-primaryv hover:opacity-75 font-semibold">
           <Link className=" static text-black font-red font-normal text-[25px] text-center my-4 mx-6" href="/signup">Get Started</Link>
          </button>
        }
      </div>
      <div>
        {
          <button className=" inline static w-[185px] h-[67px] rounded-[17px] flex justify-center items-center bg-primaryv hover:opacity-75 font-semibold">
           <Link className=" static text-black font-red font-normal text-[25px] text-center my-4 mx-6" href="/signup">Learn About</Link>
          </button>
        }
      </div>
    </section>
    </>
>>>>>>> Stashed changes
  )
}
