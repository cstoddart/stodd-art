import React, { useState
 } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useShortcut } from '../hooks/useShortcut';
import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { Footer } from './ui/footer';

const variants = {
  pressed: {
    rotate: 5,
    scale: 0.95,
  },
  hover: {
    scale: 1.05,
  },
  zigZag: {
    d: 'M 0 1 h 29 v 4 h -28 v 4 m -1 0 h 29 v 4 h -28 v 4 m -1 0 h 29 v 4 h -28 v 4 m -1 0 h 29 v 4 h -28 v 1',
    rotate: 0,
    scale: 1,
  },
  spiral: {
    d: 'M 0 1 h 29 v 28 h -28 v -25 m 0 1 h 24 v 20 h -20 v -17 m 0 1 h 16 v 12 h -12 v -9 m 0 1 h 8 v 4 h -4 v -1',
    rotate: 0,
    scale: 1,
  },
  squares: {
    d: 'M 0 1 h 13 v 12 h -12 v -11 m 15 -1 h 13 v 12 h -12 v -11 m -1 15 h 13 v 12 h -12 v -11 m -17 -1 h 13 v 12 h -12 v -11',
    rotate: 0,
    scale: 1,
  },
  hypno: {
    d: 'M 1 1 h 28 v 28 h -28 v -29 m 4 5 h 20 v 20 h -20 v -21 m 4 5 h 12 v 12 h -12 v -13 m 4 5 h 4 v 4 h -4 v -5',
    rotate: 0,
    scale: 1,
  },
  tallSquares: {
    d: 'M 1 1 h 4 v 28 h -4 v -29 m 8 1 h 4 v 28 h -4 v -29 m 8 1 h 4 v 28 h -4 v -29 m 8 1 h 4 v 28 h -4 v -29',
    rotate: 0,
    scale: 1,
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

const shapes = ['spiral', 'zigZag', 'squares', 'hypno', 'tallSquares'];

export const Animation1 = () => {
  const [shape, setShape] = useState('spiral');

  const controls = useAnimation();

  useShortcut({
    eventType: 'keydown',
    eventHandler: () => controls.start('pressed'),
    triggerKey: 'Space',
  });

  useShortcut({
    eventType: 'keyup',
    eventHandler: () => handleClick(),
    triggerKey: 'Space',
  });

  const handleClick = () => {
    const newShape = shapes[shapes.indexOf(shape) + 1] || shapes[0];
    setShape(newShape);
    controls.start(newShape);
  };

  return (
    <>
      <LeftArrow to="/3" />
      <motion.svg
        viewBox="0 0 30 30"
        width="100"
        height="100"
        whileTap="pressed"
        whileHover="hover"
        onClick={handleClick}
        animate={controls}
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
          d="M 0 1 h 29 v 28 h -28 v -25 m 0 1 h 24 v 20 h -20 v -17 m 0 1 h 16 v 12 h -12 v -9 m 0 1 h 8 v 4 h -4 v -1"
          strokeWidth="2px"
          stroke="#1d1"
          variants={variants}
        />
      </motion.svg>
      <RightArrow to="/2" />
      <Footer />
    </>
  );
};
