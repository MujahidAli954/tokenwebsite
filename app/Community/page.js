

import React from 'react';

const page = () => {
    
  return (
    <div id='community'>
      <div className='relative  sm:py-[96px] py-[64px] '>
        <div className=" w-[91%] lg:max-w-[785px] mx-auto">
      <h2  className=' font-medium text-3xl md:text-4xl  text-center text-orange-500'  >Community</h2>
      <p className=" text-grey-dark f-f-m text-base text-center ">Join the fast growing PuppyLove Army.</p>
      <div className=" grid grid-cols-12 md:gap-4 
 mt-[64px]  items-center">
<div className=" col-span-12 md:col-span-6  hidden md:block">
<img src="community.jpg"
 className="rounded-3xl sm:w-[320px] sm:h-[300px] w-[365px] h-[350px]"/>

 </div>
<div className=" col-span-12 md:col-span-6 ">
<div className=" grid grid-cols-12 items-center  md:gap-7 gap-6  ">
<div className=" col-span-6  ">
<a href="https://t.me/PuppyLoveCoin">
<div className=" text-center w-full  md:w-[140px] w-[162px] h-[162px] 
rounded-[24px] p-[32px]   bg-neutral-800  ">
<img src="Telegram.png"
 className="sm:w-[38px] sm:h-[40px] w-[48px] h-[50px] mx-auto rounded-xl  "/>
<h2 className=" f-f-sm text-white text-lg mt-5 ">Telegram</h2>
</div></a></div>
<div className=" col-span-6   ">
<a href="https://twitter.com/PuppyLoveCoin">
<div className=" text-center w-full
 md:w-[140px] w-[162px] h-[162px] rounded-[24px] p-[32px]
 bg-neutral-800 ">
<img src="Twitter.png" class=" w-[48px] h-[48px] mx-auto "/>
<h2 className=" f-f-sm text-white text-lg mt-5 ">Twitter</h2></div></a></div>
</div>
</div>
<div className="mt-[10px] col-span-12 md:col-span-6  md:hidden   ">
<img src="community.jpg" 
className=" w-full h-[365px] object-cover rounded-[24px] "/>
</div>
</div>



    </div>
    </div>
    </div>

  );
};
export default page;