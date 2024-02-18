'use client'
import React, { useState } from 'react';

const features = [
  {
    title: 'Feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 1.'
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 2.'
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 2.'
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 2.'
  },
  {
    title: 'Feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 1.'
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 2.'
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 2.'
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    additionalContent: 'Additional content for Feature 2.'
  },

  // Add more features as needed
];

const FeatureCard = ({ title, description, additionalContent }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-4   rounded-lg bg-neutral-800">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2">{showMore ? additionalContent : description}</p>
    </div>
  );
};

const Feature = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto my-28">
      <div className="p-4 border border-gray-200 text-center rounded-md">
        <h1 className="text-lg font-semibold pt-12">Features</h1>
        <h2 className="text-lg font-semibold ">Proposed Features
(To be decided by the community)</h2>
        {showMore && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        )}
        <button
          className="mt-2 p-2 rounded-full bg-gradient-to-r  from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Feature;
