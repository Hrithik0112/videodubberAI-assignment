import React from "react";

const StarRating = ({ totalStars, rating, fillColor }: any) => {
  // Calculate the integer part of the rating
  const integerRating = Math.floor(rating);
  // Calculate the fractional part of the rating
  const fractionalRating = rating - integerRating;
  // Calculate the number of empty stars needed
  const emptyStars = totalStars - integerRating - 1;

  return (
    <div className="flex">
      {[...Array(integerRating)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={fillColor}
          stroke={fillColor}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.5 3.7l1.8 4.1 4.5.4c.8.1 1.1 1.1.5 1.6l-3.3 2.9 1 4.7c.2.8-.7 1.5-1.4 1.1l-3.8-2.2-3.8 2.2c-.7.4-1.6-.3-1.4-1.1l1-4.7-3.3-2.9c-.6-.6-.3-1.6.5-1.6l4.5-.4 1.8-4.1c.4-.9 1.7-.9 2.1 0z"
          />
        </svg>
      ))}
      {/* Render a partially filled star for the fractional part */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={fillColor}
        stroke={fillColor}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={`M5.5 3.7l1.8 4.1 4.5.4c.8.1 1.1 1.1.5 1.6l-3.3 2.9 1 4.7c.2.8-.7 1.5-1.4 1.1l-3.8-2.2-3.8 2.2c-.7.4-1.6-.3-1.4-1.1l1-4.7-3.3-2.9c-.6-.6-.3-1.6.5-1.6l4.5-.4 1.8-4.1c.4-.9 1.7-.9 2.1 0z`}
        />
      </svg>
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke={fillColor}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.5 3.7l1.8 4.1 4.5.4c.8.1 1.1 1.1.5 1.6l-3.3 2.9 1 4.7c.2.8-.7 1.5-1.4 1.1l-3.8-2.2-3.8 2.2c-.7.4-1.6-.3-1.4-1.1l1-4.7-3.3-2.9c-.6-.6-.3-1.6.5-1.6l4.5-.4 1.8-4.1c.4-.9 1.7-.9 2.1 0z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
