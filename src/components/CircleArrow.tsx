import React from "react";

function CircleProject() {
  return (
    <div>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 -rotate-45 "
      >
        <circle
          cx="16"
          cy="16"
          r="16"
          fill="currentColor"
          className="text-red-600"
        ></circle>
        <path
          d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
          fill="white"
        ></path>
      </svg>
    </div>
  );
}

export default CircleProject;
