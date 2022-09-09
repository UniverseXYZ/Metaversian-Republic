import React, { useState, useEffect, useRef } from 'react';
import SlickCarousel from './SlickCarousel';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current && ref.current.readyState === 4) {
        setLoaded(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <div className="hero">
      <div className="hero__section">
        <div className='hero__section__carousel'>
          <SlickCarousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
