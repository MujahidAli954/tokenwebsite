'use client'

import React, { useState } from 'react';

const FaqItem = ({ index, question, answer, openedIndex, setOpenedIndex }) => {
    const [isClicked, setIsClicked] = useState(false);
  const isOpen = index === openedIndex;
  
  const toggleOpen = () => {
    setIsClicked(!isOpen);
    setOpenedIndex(isOpen ? null : index);
  };

  return (
    <div className={` rounded-md mb-4 bg-black-800 text-white  lg:w-[790px] mx-auto ${isOpen ? 'bg-zinc-800' : 'bg-black-800 text-white'}`}>
      <div
        className="flex justify-between items-center  mx-auto px-4 py-2 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className='font-bold text-slate-200'>{question}</div>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" />
          </svg>
        </div>
      </div>
      <div className={`${isOpen ? 'transition-max-height duration-500 ease-in-out max-h-96 overflow-hidden' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-2 text-white">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openedIndex, setOpenedIndex] = useState(null);

  return (
    <div className="container mx-auto mt-8">
      <div className='text-center mt-[50px] '>
      <h1 className='text-5xl font-extrabold  animate-pulse  bg-gradient-to-r 
       w-[140px] mx-auto from-orange-500 via-purple-500 to-orange-300 bg-clip-text text-transparent'>FAQS</h1>
      <p className='text-lg mt-[20px] mb-[100px] lg:text-xl lg:font-extrabold font-bold leading-8 tracking-wider'>Here are questions asked that you might need answers to</p>
      </div>
      <FaqItem 
        index={0}
        question="What Is NimbiToken ($NimbiToken)?"
        answer="NimbiToken is based on a fictional story of family of parent dogs and their 
        puppies, who were happily living in a kingdom called Koja, until misfortune happened and the family
         were left without their parents that were captured in a raid, leaving the puppies abandoned. This led
          to a decision by puppies to join humans who captured their parents, eventually finding safe homes with humans,
           who agreed to also look after them, aswell as empower human population with cutting-edge blockchain utilities.
            The project aims to put emphasis on care for animal,
         puppies and children and to economically empower human population in general."
        openedIndex={openedIndex}
        setOpenedIndex={setOpenedIndex}
      />
      <FaqItem
        index={1}
        question="What Is The Future Roadmap For NimbiToken?"
        answer="NimbiToken has put forward a number of proposal aimed at 
        achieving its objective - from having an onlinebased resesrch and development 
        hub where blockchain developers and likes that are within NimbiToken community and beyond,
         can assemble, research and build utilities aimed at empowering humans. To having NFT unique to the 
         project, to Merchandise, PuppyVerse, Dex, etc. Also a focuse on charitable causes to support dogs, puppies 
         and children."
        openedIndex={openedIndex}
        setOpenedIndex={setOpenedIndex}
      />
      
      <FaqItem
        index={2}
        question="How Can I Buy $NimbiToken"
        answer="Simply click Buy $NimbiToken, It will lead you to a DEX (Uniswap), 
        Choose the amount of ETH to swap, set the tax to auto or to 0.00 and swap. 
        You can also chat with the community verified mods to assist."
        openedIndex={openedIndex}
        setOpenedIndex={setOpenedIndex}
      />
      <FaqItem
        index={3}
        question="How Can I Stake $NimbiToken? "
        answer="Staking is not live yet, The community will decide when to initiate this and a 
        formal announcement will be made after the decision, including on the launch date."
        openedIndex={openedIndex}
        setOpenedIndex={setOpenedIndex}
      />
      <FaqItem
        index={4}
        question="How Can I Get Involved And Support The NimbiToken Community?"
        answer="Engage with the community on social media, help spread the word and together, NimbiToken as a community
         can be a force aimed at community holders and human empowerment and support to causes supporting animals, dogs
          and human kids."
        openedIndex={openedIndex}
        setOpenedIndex={setOpenedIndex}
      />
      <FaqItem
        index={5}
        question="Does NimbiToken Support Charitable Causes? "
        answer="Absolutely, NimbiToken is committed to giving back to the community.
         A portion of the project is targeted towards charitable initiatives, such as 
         supporting puppy shelters, dogs and children charities."
        openedIndex={openedIndex}
        setOpenedIndex={setOpenedIndex}
      />
    </div>
  );
};

export default Faq;


