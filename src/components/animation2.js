import React from 'react';
import { motion, useAnimation } from 'framer-motion';

import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { useShortcut } from '../hooks/useShortcut';
import { Footer } from './ui/footer';

const pathData = {
  pressed: 'M 30 40 H 57 L 3 59 H 57 L 3 40 z',
  released: 'M 30 1 H 57 L 3 59 H 57 L 3 1 z',
};

const variants = {
  pressed: {
    d: pathData.pressed,
  },
  released: {
    d: pathData.released,
  },
  hover: {
    strokeWidth: '4px',
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

const spring = {
  type: 'spring',
  damping: 8,
  stiffness: 250,
};

export const Animation2 = () => {
  const controls = useAnimation();

  const squashSpring = () => controls.start('pressed');

  const releaseSpring = () => controls.start('released');

  useShortcut({
    eventType: 'keydown',
    triggerKey: 'Space',
    eventHandler: squashSpring,
  });

  useShortcut({
    eventType: 'keyup',
    triggerKey: 'Space',
    eventHandler: releaseSpring,
  });

  return (
    <>
      <LeftArrow to="/1" />
      <motion.svg
        viewBox="0 0 60 60"
        whileHover="hover"
        onTapStart={squashSpring}
        onTap={releaseSpring}
        onTapCancel={releaseSpring}
        onTouchEnd={releaseSpring}
        animate={controls}
        width="100px"
        height="100px"
        style={{
          overflow: 'visible',
          userSelect: 'none',
          cursor: 'pointer',
          filter: 'drop-shadow(2px 2px 5px black)',
        }}
        exit="exit"
      >
        <motion.path
          initial={{ opacity: 1 }}
          fill="none"
          d={pathData.released}
          strokeWidth="2px"
          strokeLinejoin="round"
          stroke="#1d1"
          variants={variants}
          transition={spring}
        />
      </motion.svg>
      <RightArrow to="/3" />
      <Footer />
    </>
  );
};