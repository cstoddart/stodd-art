import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useShortcut } from '../../hooks/useShortcut';

const variants = {
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
  
  useShortcut({
    eventType: 'keyup',
    eventHandler: () => linkRef.current.click(),
    triggerKey: 'ArrowRight',
  });

  return (
    <Link innerRef={linkRef} to={to}>
      <motion.svg
        viewBox="0 0 30 16"
        width="75px"
        whileTap="pressed"
        style={{
          position: 'fixed',
          right: '5%',
          bottom: 'calc(50% - 15px)',
          overflow: 'visible',
          filter: 'drop-shadow(2px 2px 5px black)',
        }}
        exit="exit"
      >
        <motion.path
          initial={{ pathLength: 1, opacity: 1, translateX: 0 }}
          fill="none"
          stroke="white"
          strokeWidth="2px"
          d="M 0 8 h 28 m -5 0 v 5 l 5 -5 l -5 -5 v 5"
          variants={variants}
        />
      </motion.svg>
    </Link>
  );
};