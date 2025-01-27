import React from 'react';

const Quote = ({ className, width = 56, height = 52 }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 56 52"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor" // This makes the SVG color inherit from the text color in CSS
  >
    <path
      d="M56 0.522765L54.7297 10.3678C51.6245 10.156 49.225 10.7206 47.5312 12.0615C45.8374 13.4024 44.7083 15.2726 44.1437 17.6721C43.5791 20.0716 43.4732 22.7887 43.8261 25.8233H56V51.3356H32.6049V23.7061C32.6049 15.3785 34.581 9.09743 38.5331 4.86303C42.5558 0.558054 48.3781 -0.888702 56 0.522765ZM23.3951 0.522765L22.1248 10.3678C19.0195 10.156 16.62 10.7206 14.9263 12.0615C13.2325 13.4024 12.1033 15.2726 11.5388 17.6721C10.9742 20.0716 10.8683 22.7887 11.2212 25.8233H23.3951V51.3356H0V23.7061C0 15.3785 1.97606 9.09743 5.92817 4.86303C9.95085 0.558054 15.7732 -0.888702 23.3951 0.522765Z"
    />
  </svg>
);

export default Quote;
