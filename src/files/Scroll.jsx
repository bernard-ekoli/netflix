import React, { useEffect } from 'react';
import './css/scroll.css';
const Scroll = ({ scrolls, setScrolls }) => {
  useEffect(() => {
    const scrollId = document.getElementById('scrollID');
    const right = document.getElementById('right');
    const left = document.getElementById('left');

    // Right button click event for smooth scroll
    right.onclick = () => {
      scrollId.scrollTo({
        left: scrollId.scrollLeft + 150,
        behavior: 'smooth',
      });
    };

    // Left button click event for smooth scroll
    left.onclick = () => {
      scrollId.scrollTo({
        left: scrollId.scrollLeft - 150,
        behavior: 'smooth',
      });
    };

    // Scroll event handler
    scrollId.onscroll = () => {
      const scrollLeft = scrollId.scrollLeft;
      const maxScrollLeft = scrollId.scrollWidth - scrollId.clientWidth;

      // Show/hide buttons based on scroll position
      if (scrollLeft >= maxScrollLeft) {
        right.className = 'rightHid'; // Hide right button at the end
      } else {
        right.className = ''; // Show the right button if not at the end
      }
      if (scrollLeft === 0) {
        left.className = 'leftHid'; // Hide left button at the start
      } else {
        left.className = ''; // Show the left button if not at the start
      }
    };
  }, []);

  return (
    <div id="parele">
      <div id="left">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" data-icon="ChevronLeftStandard" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.41421 12L15.7071 4.70711L14.2929 3.29289L6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071L14.2929 20.7071L15.7071 19.2929L8.41421 12Z" fill="currentColor" />
        </svg>
      </div>
      <div id="right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" data-icon="ChevronRightStandard" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor" />
        </svg>
      </div>
      <div id="scrollID">
        {scrolls.map((item, index) => (
          <img key={index} src={item} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
