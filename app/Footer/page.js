import React from "react";

export default function(){
    return(<>
    <div className=" mx-auto">
     <ul className="flex place-content-center">
        <li>
    <a href="https://t.me/NimbiToken">
          <div className=" text-center w-full md:w-[162px] h-[162px] rounded-[24px] p-[32px] bg-blend-color-burn bg-primary-vdark ">
            <img src="Telegram.png" class=" w-[48px] h-[48px] mx-auto "/>
            <h2 className=" f-f-sm text-white text-lg mt-5 ">Telegram</h2>
            </div>
          </a>
          </li>
          <li>
          <a href="https://twitter.com/NimbiToken">
            <div className=" text-center w-full md:w-[162px] h-[162px] rounded-[24px] p-[32px] bg-primary-vdark ">
            <img src="Twitter.png" className=" w-[48px] h-[48px] mx-auto "/>
            <h2 className=" f-f-sm text-white text-lg mt-5 ">Twitter</h2>
          </div>
          </a>
          </li>
          </ul>
          
    </div>
    <div  className="text-center ">
    <h3 className=" text-slate-300">Copyright * 2023. NimbiToken. All Rights Reserved.</h3>
    <p className="w-11/12 mx-auto text-gray-600   w-10/12 lg:w-[1050px] text-sm my-10">This website provides information only and does not constitute an offer or recommendation to buy or sell $NimbiToken 
        tokens. Token transactions are inherently risky, and all participants must be prepared for potential losses.
         The value of $NimbiToken tokens can be highly volatile. It is essential to be aware of local regulations regarding
          cryptocurrency transactions in your jurisdiction.
         NimbiToken Coin is not affiliated with any other entities or organizations with a similar name or theme.</p>
         </div>
    </>)
}