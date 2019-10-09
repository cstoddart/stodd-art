import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import { useShortcut } from '../hooks/useShortcut';
import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { Footer } from './ui/footer';

const StyledFish = styled(motion.g)`
  cursor: pointer;
`;

const StyledMotionSvg = styled(motion.svg)`
  max-height: 100px;
  width: 60%;
  overflow: visible;
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
  swimLoop: {
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
      loop: 1,
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
    fill="#223"
    stroke="#1d1"
    strokeWidth="4px"
    variants={fishVariants}
    animate={controls}
    initial="initial"
    onMouseDown={handleClick}
  >
    <path d="M334.15,76.84s6.33,4.36,13.05,8.72c9.17,6,42.93,7.52,42.93,7.52l-14-18.61" />
    <path d="M387.17,71.86s6.65,4.22,17.72,6c8.62,1.41,34.87,1.93,34.87,1.93L426.82,63.11" />
    <path d="M339.15,17.35s8.37-6.87,11.74-7.91c19-5.82,79.48,0,79.48,0l-8.75,22.92" />
    <path d="M265.7,47.52a142.05,142.05,0,0,0,55.57,26.95,134.74,134.74,0,0,0,18.22,3c24.56,2.26,40-4.51,66.4-9.86,47.72-9.66,58.46-15.6,77.47-9.52a173.8,173.8,0,0,1,37.23,17l1.34-55.42A146.6,146.6,0,0,1,484.71,39c-18.33,6.34-29.48.7-77.14-9.86-39.07-8.65-58.95-12.94-75.8-11.56a77.3,77.3,0,0,0-14,2.67A128.51,128.51,0,0,0,265.7,47.52Z" />
    <path d="M317.74,20.27c8.12,15.35,7.76,37.11,3.53,54.2" />
    <line x1="484.71" y1="39.02" x2="483.36" y2="58.06" />
  </StyledFish>
);

const topTeethVariants = {
  initial: {
    opacity: 0,
    translateY: '-200px',
  },
  bite: {
    opacity: [0, 1, 1,],
    translateY: ['-200px', '-200px', '-1px'],
    times: [0, 0.75, 1],
    transition: {
      duration: 0.75,
      ease: [0.75, 0, 1, 0.25],
    },
  },
  biteDelay: {
    opacity: [0, 1, 1,],
    translateY: ['-200px', '-200px', '-1px'],
    times: [0, 0.75, 1],
    transition: {
      duration: 0.75,
      ease: [0.75, 0, 1, 0.25],
      delay: 1.25,
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
  <motion.g
    stroke="#1d1"
    strokeWidth="4px"
    variants={topTeethVariants}
    initial="initial"
    animate={controls}
    fill="#223"
  >
    <polygon points="218.69 100 262.43 0 174.96 0 218.69 100" />
    <polygon points="43.74 100 87.48 0 0 0 43.74 100" />
    <polygon points="306.17 100 349.91 0 262.43 0 306.17 100" />
    <polygon points="393.65 100 437.39 0 349.91 0 393.65 100" />
    <polygon points="481.13 100 524.86 0 437.39 0 481.13 100" />
    <polygon points="568.6 100 612.34 0 524.86 0 568.6 100" />
    <polygon points="656.08 100 699.82 0 612.34 0 656.08 100" />
    <polygon points="743.56 100 787.3 0 699.82 0 743.56 100" />
    <polygon points="131.22 100 174.96 0 87.48 0 131.22 100" />
  </motion.g>
);

const bottomTeethVariants = {
  initial: {
    opacity: 0,
    translateY: '200px',
  },
  bite: {
    opacity: [0, 1, 1,],
    translateY: ['200px', '200px', '1px'],
    times: [0, 0.75, 1],
    transition: {
      duration: 0.75,
      ease: [0.75, 0, 1, 0.25],
    },
  },
  biteDelay: {
    opacity: [0, 1, 1,],
    translateY: ['200px', '200px', '1px'],
    times: [0, 0.75, 1],
    transition: {
      duration: 0.75,
      ease: [0.75, 0, 1, 0.25],
      delay: 1.25,
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
  <motion.g
    stroke="#1d1"
    strokeWidth="4px"
    variants={bottomTeethVariants}
    initial="initial"
    animate={controls}
    fill="#223"
  >
    <polygon points="262.43 0 306.17 100 218.69 100 262.43 0" />
    <polygon points="87.48 0 131.22 100 43.74 100 87.48 0" />
    <polygon points="349.91 0 393.65 100 306.17 100 349.91 0" />
    <polygon points="437.39 0 481.13 100 393.65 100 437.39 0" />
    <polygon points="524.86 0 568.6 100 481.13 100 524.86 0" />
    <polygon points="612.34 0 656.08 100 568.6 100 612.34 0" />
    <polygon points="699.82 0 743.56 100 656.08 100 699.82 0" />
    <polygon points="174.96 0 218.69 100 131.22 100 174.96 0" />
  </motion.g>
);

export const Animation5 = () => {
  const controls = useAnimation();
  const [isSwimming, setIsSwimming] = useState(false);
  
  const swimLoop = () => {
    if (isSwimming) return;
    setIsSwimming(true);
    controls.start('swimLoop');
  };

  const bite = async () => {
    await controls.start('bite');
    await controls.stop('swimLoop');
    await controls.start('hide');
    reset();
  };

  const reset = () => {
    controls.start('initial');
    setIsSwimming(false);
  };

  const handleClick = async () => {
    setIsSwimming(true);
    controls.start('swim');
    await controls.start('biteDelay');
    await controls.start('hide');
    reset();
  };
  
  useShortcut({
    eventType: 'keydown',
    triggerKey: 'Space',
    eventHandler: swimLoop,
  });

  useShortcut({
    eventType: 'keyup',
    triggerKey: 'Space',
    eventHandler: bite,
  });

  return (
    <>
      <LeftArrow to="/4" />
      <StyledMotionSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 787.3 100"
        exit="exit"
      >
        <Fish controls={controls} handleClick={handleClick} />
        <TopTeeth controls={controls} />
        <BottomTeeth controls={controls} />
      </StyledMotionSvg>
      <RightArrow to="/1" />
      <Footer />
    </>
  );
};
