import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useShortcut } from '../../hooks/useShortcut';

const StyledRightArrow = styled(motion.svg)`
  position: fixed;
  right: 5%;
  bottom: calc(50% - 15px);
  overflow: visible;
  filter: drop-shadow(2px 2px 5px black);
  max-width: 75px;
  width: 10%;
`;

const variants = {
  initial: {
    scale: 1,
    translateX: 0,
    opacity: 1,
    pathLength: 1,
  },
  pressed: {
    scale: 0.9,
    translateX: 5,
  },
  exit: {
    pathLength: 0,
    transition: {
      yoyo: 1,
    },
    opacity: 0,
  },
};

export const RightArrow = ({ to }) => {
  const linkRef = useRef(null);
  const controls = useAnimation();

  const pressArrow = () => controls.start('pressed');

  const clickArrow = () => {
    controls.start('initial');
    linkRef.current.click();
  };
  
  useShortcut({
    eventType: 'keydown',
    eventHandler: pressArrow,
    triggerKey: 'ArrowRight',
  });
  
  useShortcut({
    eventType: 'keyup',
    eventHandler: clickArrow,
    triggerKey: 'ArrowRight',
  });

  return (
    <Link innerRef={linkRef} to={to}>
      <StyledRightArrow
        viewBox="0 0 30 16"
        whileTap="pressed"
        exit="exit"
        animate={controls}
      >
        <motion.path
          initial="initial"
          fill="none"
          stroke="white"
          strokeWidth="2px"
          d="M 0 8 h 28 m -5 0 v 5 l 5 -5 l -5 -5 v 5"
          variants={variants}
        />
      </StyledRightArrow>
    </Link>
  );
};
