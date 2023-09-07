export default function Home () {
  return (
    <section className="flex flex-row relative">
      <h1>Esta es la landing page</h1>
      <div className="z-40 bg-pink h-6 w-6 rounded-full absolute ml-2">05</div>
      <div className="z-30 bg-green h-6 w-6 rounded-full absolute ml-3">04</div>
      <div className="z-20 bg-yellow h-6 w-6 rounded-full absolute ml-4">03</div>
      <div className="z-10 bg-orange h-6 w-6 rounded-full absolute ml-5">02</div>
      <div className="z-0 bg-blue h-6 w-6 rounded-full absolute ml-6">01</div>
    </section>
  )
}