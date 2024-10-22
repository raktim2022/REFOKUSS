import React from 'react'
import img1 from "../assets/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.png";

const Footer = () => {
  return (
    <div className='w-full'>
    <div className='max-w-screen-xl mx-auto py-10 px-2 flex gap-32'>
        <div className='basis-1/2 relative'>
        <img src={img1} className='w-14 h-14 absolute' alt='refokus keyvisual purple animation' />
        <h1 className='text-[11.5rem] font-semibold  leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
        <div className='basis-1/3'>
        <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
        {["instagram","twitter (x?)","facebook","linkedin"].map((item,index)=><a key={index} className='hover:text-zinc-100 cursor-pointer block mt-3 text-zinc-600 capitalize'>{item}</a>)}
        </div>
        <div className='basis-1/3'>
        <h4 className='mb-10 text-zinc-500 capitalize'>siteMap</h4>
        {["home","work","career","contact"].map((item,index)=><a key={index} className='hover:text-zinc-100 cursor-pointer block mt-3 text-zinc-500 capitalize'>{item}</a>)}
        </div>
        <div className='basis-1/3'>
            <p className='relative text-sm capitalize mt-10 text-right '>refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img src='https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp' alt='' className=' rounded-md w-52 absolute left-[82.4%] mt-3' />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer