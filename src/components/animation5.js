import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import { useShortcut } from '../hooks/useShortcut';
import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { Footer } from './ui/footer';

const StyledTopTeeth = styled(motion.svg)`
  z-index: 1;
`;

const topTeethVariants = {
  initial: {
    opacity: 0,
    translateY: '-200px',
  },
  bite: {
    opacity: 1,
    translateY: '90px',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  biteDelay: {
    opacity: 1,
    translateY: '90px',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
      delay: 1.5,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

const TopTeeth = ({ controls }) => (
  <StyledTopTeeth
    xmlns="http://www.w3.org/2000/svg"
    height="100"
    viewBox="0 0 779.42 99"
    stroke="#1d1"
    strokeWidth="4px"
    variants={topTeethVariants}
    initial="initial"
    animate={controls}
    fill="#223"
    exit="exit"
  >
    <polygon points="216.51 99 259.81 0 173.21 0 216.51 99" />
    <polygon points="43.3 99 86.6 0 0 0 43.3 99" />
    <polygon points="303.11 99 346.41 0 259.81 0 303.11 99" />
    <polygon points="389.71 99 433.01 0 346.41 0 389.71 99" />
    <polygon points="476.31 99 519.62 0 433.01 0 476.31 99" />
    <polygon points="562.92 99 606.22 0 519.62 0 562.92 99" />
    <polygon points="649.52 99 692.82 0 606.22 0 649.52 99" />
    <polygon points="736.12 99 779.42 0 692.82 0 736.12 99" />
    <polygon points="129.9 99 173.21 0 86.6 0 129.9 99" />
  </StyledTopTeeth>
);

const StyledFish = styled(motion.svg)`
  cursor: pointer;
`;

const fishVariants = {
  initial: {
    opacity: 1,
    translateX: 0,
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0,
      delay: 0.3,
    }
  },
  swim: {
    translateX: [
      0, -150, -200, -150,    0,  150,  200,  150,    0,
    ],
    scaleX: [
      1,    1,    0,-0.75,-0.75,-0.75,    0,    1,    1,
    ],
    scaleY: [
      1,    1,    1, 0.75, 0.75, 0.75,    1,    1,    1,
    ],
    transition: {
      duration: 2,
      loop: Infinity,
    },
  },
  swimLess: {
    translateX: [
      0, -150, -200, -150,    0,  150,  200,  150,    0,
    ],
    scaleX: [
      1,    1,    0,-0.75,-0.75,-0.75,    0,    1,    1,
    ],
    scaleY: [
      1,    1,    1, 0.75, 0.75, 0.75,    1,    1,    1,
    ],
    transition: {
      duration: 2,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0,
      delay: 1,
    },
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

const Fish = ({ controls, handleClick }) => (
  <StyledFish
    xmlns="http://www.w3.org/2000/svg"
    width="200px"
    viewBox="0 0 124.31 49.73"
    fill="none"
    stroke="#1d1"
    strokeWidth="2px"
    variants={fishVariants}
    animate={controls}
    initial="initial"
    onMouseDown={handleClick}
    exit="exit"
  >
    <path d="M.72,23.46A65,65,0,0,0,27.41,38.67a55.91,55.91,0,0,0,8.75,1.68C48,41.63,55.37,37.8,68.05,34.78,91,29.33,96.13,26,105.27,29.41A78.8,78.8,0,0,1,123.15,39l.64-31.29a68.18,68.18,0,0,1-17.88,10.94c-8.8,3.58-14.16.39-37-5.57C50.09,8.21,40.55,5.78,32.45,6.57a32.7,32.7,0,0,0-6.74,1.5A59.52,59.52,0,0,0,.72,23.46Z" />
    <path d="M25.71,8.07c3.9,8.67,3.73,21,1.7,30.6" />
    <line x1="105.91" y1="18.66" x2="105.27" y2="29.41" />
    <path d="M59.06,37.2a22.48,22.48,0,0,0,8.51,3.4c4.14.8,16.75,1.09,16.75,1.09l-6.21-9.43" />
    <path d="M33.6,40s3,2.46,6.26,4.92c4.41,3.36,20.62,4.25,20.62,4.25l-6.7-10.51" />
    <path d="M36,6.42S40,2.54,41.64,2c9.13-3.29,38.17,0,38.17,0L75.61,14.9" />
  </StyledFish>
);

const bottomTeethVariants = {
  initial: {
    opacity: 0,
    translateY: '200px',
  },
  bite: {
    opacity: 1,
    translateY: '-90px',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  biteDelay: {
    opacity: 1,
    translateY: '-90px',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
      delay: 1.5,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

const BottomTeeth = ({ controls }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    height="100"
    viewBox="0 0 692.82 99"
    stroke="#1d1"
    strokeWidth="4px"
    variants={bottomTeethVariants}
    initial="initial"
    animate={controls}
    fill="#223"
    exit="exit"
  >
    <polygon points="216.51 0 259.81 99 173.21 99 216.51 0" />
    <polygon points="43.3 0 86.6 99 0 99 43.3 0" />
    <polygon points="303.11 0 346.41 99 259.81 99 303.11 0" />
    <polygon points="389.71 0 433.01 99 346.41 99 389.71 0" />
    <polygon points="476.31 0 519.62 99 433.01 99 476.31 0" />
    <polygon points="562.92 0 606.22 99 519.62 99 562.92 0" />
    <polygon points="649.52 0 692.82 99 606.22 99 649.52 0" />
    <polygon points="129.9 0 173.21 99 86.6 99 129.9 0" />
  </motion.svg>
);

export const Animation5 = () => {
  const controls = useAnimation();
  const [isSwimming, setIsSwimming] = useState(false);
  
  const swim = () => {
    if (isSwimming) return;
    setIsSwimming(true);
    controls.start('swim');
  };

  const bite = async () => {
    await controls.start('bite');
    await controls.stop('swim');
    await controls.start('hide');
    reset();
  };

  const reset = () => {
    controls.start('initial');
    setIsSwimming(false);
  };

  const handleClick = async () => {
    setIsSwimming(true);
    controls.start('swimLess');
    await controls.start('biteDelay');
    await controls.start('hide');
    reset();
  };
  
  useShortcut({
    eventType: 'keydown',
    triggerKey: 'Space',
    eventHandler: swim,
  });

  useShortcut({
    eventType: 'keyup',
    triggerKey: 'Space',
    eventHandler: bite,
  });

  return (
    <>
      <LeftArrow to="/4" />
      <TopTeeth controls={controls} />
      <Fish controls={controls} handleClick={handleClick} />
      <BottomTeeth controls={controls} />
      <RightArrow to="/1" />
      <Footer />
    </>
  );
};
