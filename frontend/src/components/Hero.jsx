import React from 'react'

function Hero() {
  return (
    <div className="hero h-screen ">
        <div className=" w-full h-full flex flex-col justify-center items-center bg-transparent ">
            <h1 className='tag-line text-6xl text-zinc-300 mb-8 select-none'>Effortless Invoicing, Exquisitely Done.</h1>
            <a href="/generate">
              <button className="get-starter transition ease-in-out select-none h-9 w-56 border-solid bg-slate-500 rounded-2xl hover:bg-slate-600 cursor-pointer">Get Started for Free</button>
              </a>
        </div>
    </div>
  )
}

export default Hero