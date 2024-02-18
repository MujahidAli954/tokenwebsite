'use client'
import { useState } from "react";
function Faq() {
  const [index1, setIndex1] = useState(false);
  const [index2, setIndex2] = useState(false);
  const [index3, setIndex3] = useState(false);
  const [index4, setIndex4] = useState(false);
  const [index5, setIndex5] = useState(false);
  const [index6, setIndex6] = useState(false);

  const clickHandle = () => {
    setIndex1(!index1);
  };

  const Style = {
    backgroundColor: index1 ? "#474747" : "black",
  };
  const getSvgRotation = (index) => {
    return index ? "rotate-180" : ""; // Add the class for rotation if index is true
  };

  const clickHandle2 = () => {
    setIndex2(!index2);
  };

  const Style2 = {
    backgroundColor: index2 ? "#474747" : "black",
  };
  const clickHandle3 = () => {
    setIndex3(!index3);
  };

  const Style3 = {
    backgroundColor: index3 ? "#474747" : "black",
  };
  const clickHandle4 = () => {
    setIndex4(!index4);
  };

  const Style4 = {
    backgroundColor: index4 ? "#474747" : "black",
  };
  const clickHandle5 = () => {
    setIndex5(!index5);
  };

  const Style5 = {
    backgroundColor: index5 ? "#474747" : "black",
  };
  const clickHandle6 = () => {
    setIndex6(!index6);
  };

  const Style6 = {
    backgroundColor: index6 ? "#474747" : "black",
  };


  return (
    <>
   
        
      <div className="faq bg-black 	text-center text-white">
        <h1 className=" my-4 text-bouncy text-3xl	text-primary font-bouncy leading-normal font-medium  italic font-bold  text-24 tracking-tighter text-orange-500 list-none leading-tight ">
          FAQS
        </h1>
        <p className="font-bold  text-lg">
          Here are questions asked that you might need answers to
        </p>
      </div>
      <div className="container   w-[900px] mx-auto lg:px-4 lg:w-[800px]   ">
      <div className="	 lg:w-full sm:px-4 sm:mt-8  rounded-lg flex-row item-center justify-center place-content-center   sm:mx-8 "style={Style} >
        <div className="question">
          <button className="btn  cursor-pointer text-lg my-4 font-bold  " onClick={clickHandle} >
            What Is PuppyLove ($PuppyLove)
           <div className={` cursor-pointer bottom-[10px] absolute lg:top-[220px] lg:right-[310px] ${getSvgRotation(index1)}`}>
           <svg 
              height="8"
              class=" rotate-180 absolute bottom-[16px] left-[600px] lg:top-[60px] lg:right-[15px] "
              viewBox="0 0 14 8" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8A8A8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
           </div>
          </button>
        </div>
        <div className='answer'>
          {index1 && (
            <div>
              <p className=" sm:font-medium font-normal text-md lg:w-full w-11/12   pb-2">
              PuppyLove is based on a fictional story of family of parent dogs
                and their puppies, who were happily living in a kingdom called
                Koja, until misfortune happened and the family were left without
                their parents that were captured in a raid, leaving the puppies
                abandoned. This led to a decision by puppies to join humans who
                captured their parents, eventually finding safe homes with
                humans, who agreed to also look after them, aswell as empower
                human population with cutting-edge blockchain utilities. The
                project aims to put emphasis on care for animal, puppies and
                children and to economically empower human population in
                general.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
      {/* ................. */}
      <div className="container   w-[900px] mx-auto lg:px-4 lg:w-[800px]   ">
      <div className="	 lg:w-full sm:px-4 sm:mt-8  rounded-lg flex-row item-center justify-center place-content-center   sm:mx-8 "style={Style2} >
        <div className="question">
          <button className="btn  cursor-pointer text-lg my-4 font-bold  " onClick={clickHandle2} >
          What Is The Future Roadmap For PuppyLove?
           <div className={` cursor-pointer bottom-[10px] absolute lg:top-[220px] lg:right-[310px] ${getSvgRotation(index2)}`}>
           <svg 
              height="8"
              class=" rotate-180 absolute bottom-[16px] left-[600px] lg:top-[60px] lg:right-[15px] "
              viewBox="0 0 14 8" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8A8A8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
           </div>
          </button>
        </div>
        <div className='answer'>
          {index2 && (
            <div>
              <p className=" sm:font-medium font-normal text-md lg:w-full w-11/12   pb-2">
              PuppyLove has put forward a number of proposal aimed at achieving its objective - from having an onlinebased resesrch and development hub where blockchain developers and likes that are within puppylove community and beyond, can assemble, research and build utilities aimed at empowering humans. To having NFT unique to the project, to Merchandise, PuppyVerse, Dex, etc. Also a focuse on charitable causes to support dogs, puppies and children.
                general.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
      
      {/* ..................... */}

      <div className="container   w-[900px] mx-auto lg:px-4 lg:w-[800px]   ">
      <div className="	 lg:w-full sm:px-4 sm:mt-8  rounded-lg flex-row item-center justify-center place-content-center   sm:mx-8 "style={Style3} >
        <div className="question">
          <button className="btn  cursor-pointer text-lg my-4 font-bold  " onClick={clickHandle3} >
          How Can I Buy $PuppyLove
           <div className={` cursor-pointer bottom-[10px] absolute lg:top-[220px] lg:right-[310px] ${getSvgRotation(index3)}`}>
           <svg 
              height="8"
              class=" rotate-180 absolute bottom-[16px] left-[600px] lg:top-[60px] lg:right-[15px] "
              viewBox="0 0 14 8" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8A8A8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
           </div>
          </button>
        </div>
        <div className='answer'>
          {index3 && (
            <div>
              <p className=" sm:font-medium font-normal text-md lg:w-full w-11/12   pb-2">
              Simply click Buy $PuppyLove, It will lead you to a DEX (Uniswap), Choose the amount of ETH to swap,
               set the tax to auto or to 0.00 and swap. You can also chat with the community verified mods to assist.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>

{/* ..................... */}
<div className="container   w-[900px] mx-auto lg:px-4 lg:w-[800px]   ">
      <div className="	 lg:w-full sm:px-4 sm:mt-8  rounded-lg flex-row item-center justify-center place-content-center   sm:mx-8 "style={Style4} >
        <div className="question">
          <button className="btn  cursor-pointer text-lg my-4 font-bold  " onClick={clickHandle4} >
          How Can I Stake $PuppyLove?
           <div className={` cursor-pointer bottom-[10px] absolute lg:top-[220px] lg:right-[310px] ${getSvgRotation(index4)}`}>
           <svg 
              height="8"
              class=" rotate-180 absolute bottom-[16px] left-[600px] lg:top-[60px] lg:right-[15px] "
              viewBox="0 0 14 8" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8A8A8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
           </div>
          </button>
        </div>
        <div className='answer'>
          {index4 && (
            <div>
              <p className=" sm:font-medium font-normal text-md lg:w-full w-11/12   pb-2">
              Staking is not live yet, The community will decide when to initiate this and a formal announcement will be made after the decision, including on the launch date.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>


      <div className="container   w-[900px] mx-auto lg:px-4 lg:w-[800px]   ">
      <div className="	 lg:w-full sm:px-4 sm:mt-8  rounded-lg flex-row item-center justify-center place-content-center   sm:mx-8 "style={Style5} >
        <div className="question">
          <button className="btn  cursor-pointer text-lg my-4 font-bold  " onClick={clickHandle5} >
          How Can I Get Involved And Support The PuppyLove Community?
           <div className={` cursor-pointer bottom-[10px] absolute lg:top-[220px] lg:right-[310px] ${getSvgRotation(index5)}`}>
           <svg 
              height="8"
              class=" rotate-180 absolute bottom-[16px] left-[600px] lg:top-[60px] lg:right-[15px] "
              viewBox="0 0 14 8" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8A8A8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
           </div>
          </button>
        </div>
        <div className='answer'>
          {index5 && (
            <div>
              <p className=" sm:font-medium font-normal text-md lg:w-full w-11/12   pb-2">
              Engage with the community on social media, help spread the word and together, puppylove as a community can be a force aimed at community holders and human empowerment and support to causes supporting animals, dogs and human kids.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>

      <div className="container   w-[900px] mx-auto lg:px-4 lg:w-[800px]   ">
      <div className="	 lg:w-full sm:px-4 sm:mt-8  rounded-lg flex-row item-center justify-center place-content-center   sm:mx-8 "style={Style6} >
        <div className="question">
          <button className="btn  cursor-pointer text-lg my-4 font-bold  " onClick={clickHandle6} >
          Does PuppyLove Support Charitable Causes?
           <div className={` cursor-pointer bottom-[10px] absolute lg:top-[220px] lg:right-[310px] ${getSvgRotation(index6)}`}>
           <svg 
              height="8"
              class=" rotate-180 absolute bottom-[16px] left-[600px] lg:top-[60px] lg:right-[15px] "
              viewBox="0 0 14 8" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8A8A8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
           </div>
          </button>
        </div>
        <div className='answer'>
          {index6 && (
            <div>
              <p className=" sm:font-medium font-normal text-md lg:w-full w-11/12   pb-2">
              Absolutely, PuppyLove is committed to giving back to the community. A portion of the project is targeted towards charitable initiatives, such as supporting puppy shelters, dogs and children charities.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>


















     
    </>
  );
}

export default Faq;
