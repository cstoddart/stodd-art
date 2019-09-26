import React, { useState
 } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useShortcut } from '../hooks/useShortcut';
import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { Footer } from './ui/footer';

const variants = {
  initial: {
    opacity: 1,
  },
  pressed: {
    rotate: 5,
    scale: 0.95,
  },
  hover: {
    scale: 1.05,
  },
  zigZag: {
    d: 'M 1 1 h 28 v 4 h -28 v 4 m 0 0 h 28 v 4 h -28 v 4 m 0 0 h 28 v 4 h -28 v 4 m 0 0 h 28 v 4 h -28 v 0',
    rotate: 0,
    scale: 1,
  },
  spiral: {
    d: 'M 1 1 h 28 v 28 h -28 v -24 m 0 0 h 24 v 20 h -20 v -16 m 0 0 h 16 v 12 h -12 v -8 m 0 0 h 8 v 4 h -4 v 0',
    rotate: 0,
    scale: 1,
  },
  tallSquares: {
    d: 'M 1 1 h 4 v 28 h -4 v -28 m 8 0 h 4 v 28 h -4 v -28 m 8 0 h 4 v 28 h -4 v -28 m 8 0 h 4 v 28 h -4 v -28',
    rotate: 0,
    scale: 1,
  },
  squares: {
    d: 'M 1 1 h 12 v 12 h -12 v -12 m 16 0 h 12 v 12 h -12 v -12 m 0 16 h 12 v 12 h -12 v -12 m -16 0 h 12 v 12 h -12 v -12',
    rotate: 0,
    scale: 1,
  },
  hypno: {
    d: 'M 1 1 h 28 v 28 h -28 v -28 m 4 4 h 20 v 20 h -20 v -20 m 4 4 h 12 v 12 h -12 v -12 m 4 4 h 4 v 4 h -4 v -4',
    rotate: 0,
    scale: 1,
  },
  x: {
    d: 'M 0 1 h 7 l 8 8 l 8 -8 h 7 m -1 -1 v 7 l -8 8 l 8 8 v 7 m 1 -1 h -7 l -8 -8 l -8 8 h -7 m 1 1 v -7 l 8 -8 l -8 -8 v -7',
    rotate: 0,
    scale: 1,
  },
  links: {
    d: 'M 1 5 h 0 v 24 h 8 v -24 m -4 20 h 0 v -24 h 8 v 24 m 4 -20 h 0 v 24 h 8 v -24 m -4 20 h 0 v -24 h 8 v 24',
    rotate: 0,
    scale: 1,
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

const shapes = [
  'spiral',
  'zigZag',
  'tallSquares',
  'hypno',
  'squares',
  'links',
];

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
          initial="initial"
          fill="none"
          d="M 1 1 h 28 v 28 h -28 v -24 m 0 0 h 24 v 20 h -20 v -16 m 0 0 h 16 v 12 h -12 v -8 m 0 0 h 8 v 4 h -4 v 0"
          strokeWidth="2px"
          strokeLinecap="square"
          stroke="#1d1"
          variants={variants}
        />
      </motion.svg>
      <RightArrow to="/2" />
      <Footer />
    </>
  );
};
