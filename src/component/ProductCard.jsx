import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

// Assuming you have a function to detect slow internet
// For demonstration, let's simulate checking for slow internet on component mount
const checkForSlowInternet = () => {
  // Replace this with actual logic to check for slow internet
  return Math.random() > 0.5; // Simulates a 50% chance of detecting slow internet
};

export default function ProductCard({ image, title, price }) {
  const [loading, setLoading] = useState(checkForSlowInternet());

  useEffect(() => {
    // Simulate a delay to mimic network request
    setTimeout(() => {
      setLoading(false); // Set loading to false after simulating a network request
    }, 2000); // Adjust delay as needed
  }, []);

  if (loading) {
    return (
      <Card className="max-w-sm" imgAlt={title} imgSrc={image}>
        <div className="flex flex-col items-center justify-center h-full p-5">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
          </svg>
          <p className="text-gray-500">Loading product details...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-sm" imgAlt={title} imgSrc={image}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        {/* Icons and ratings */}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}$
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
