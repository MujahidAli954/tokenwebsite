import teamImage from './Img/community.jpg';

import React from 'react';
import telegram from './Img/telegram.png'
const page = () => {
    console.log(teamImage)
  return (
    <div id='community'>
      <div className='relative sm:py-[96px] py-[64px] '>
        <div className=" w-[91%] lg:max-w-[785px] mx-auto">
      <h2  className='f-f-r-b font-medium text-xl md:text-4xl text-primary text-center'  >Community</h2>
      <p className=" text-grey-dark f-f-m text-base text-center ">Join the fast growing PuppyLove Army.</p>
      <div className='  grid grid-cols-12 gap-5  mt-[64px]  items-center'>
        <div className=' col-span-12 md:col-span-6 hidden md:block   '>
      <img src="/_next/static/media/community.18cfe37f.jpg" alt="community"  className="rounded-[35px] w-[365px] h-[350px] "/> </div>
      {/* Other content */}
      {/* .......................TELEGRAM.............. */}
      <div className= 'col-span-12 md:col-span-6'>
        <div className=' grid grid-cols-12 items-center gap-6  '>
          <div className=" col-span-6 ">
          <a href="https://t.me/PuppyLoveCoin">
          <div className=" text-center w-full md:w-[162px] h-[162px] rounded-[24px] p-[32px] bg-blend-color-burn bg-primary-vdark ">
            <img src={telegram} class=" w-[48px] h-[48px] mx-auto "/>
            <h2 className=" f-f-sm text-white text-lg mt-5 ">Telegram</h2>
            </div>
          </a>
          </div>
          {/* ............................ */}
          <div className=" col-span-6   ">
            <a href="https://twitter.com/PuppyLoveCoin">
            <div className=" text-center w-full md:w-[162px] h-[162px] rounded-[24px] p-[32px] bg-primary-vdark ">
            <img src="/static/media/Twitter - Original.a71c1b2d1b5dc7c2c5b1812e0440c31d.svg" className=" w-[48px] h-[48px] mx-auto "/>
            <h2 className=" f-f-sm text-white text-lg mt-5 ">Twitter</h2>
          </div>
          </a>
          </div>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6  md:hidden   ">
        <img src="/_next/static/media/community.18cfe37f.jpg" className=" w-full h-[365px] object-cover rounded-[44px] "/>
      </div>
    </div>



    </div>
    </div>
    </div>

  );
};
export default page;