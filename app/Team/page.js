
import {pic} from '/public/team.jpg';

export  default function(){
    return(
        <>
        
        <div className="container mx-auto">
            <h1 className=" font-bouncy text-mono my-20 text-4xl text-primary  text-orange-500  tracking-tighter   font-extrabold text-center ">
              TEAM
            </h1>
            <div class=" mb-10 grid grid-cols-12  items-center xl:gap-[64px] mx-6 lg:mx-8  ">
                <div class=" col-span-12 xl:col-span-4 hidden xl:block    ">
            <img src={pic} className=" w-[436px] h-[436px] lg:w-[443px] lg:h-[433px] mx-auto xl:ml-0 "/>
            </div>
            <div className=" col-span-12 xl:col-span-8    " >
                <h4 className="lg:mx-4 lg:leading-[50px]  sm:leading-[50px] text-center font-medium  text-base lg:text-2xl text-lg text-white   xl:text-start  ">
                With Renouncement and Liquidity burnt, <span class="text-lg font-bold text-[255 134 15]   font-mono  text-orange-500  text-primary-light  ">PuppyLove </span> is fully community owned until the community decides on individuals to represent the project and vote On Various Proposed Features to Develop, with Innovators and Developers Drawn from Community or Human Population for its Individual Development.
                </h4>
                </div>
                <div className=" col-span-12 xl:col-span-4 xl:hidden mt-[64px]   ">
                    <img src={pic} class=" w-[343px] h-[343px] sm:w-[436px] sm:h-[436px] lg:w-[443px] lg:h-[433px] mx-auto xl:ml-0 "/>

                    </div>

            </div>

        </div>
        
        </>
    )
}