import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useShortcut } from '../hooks/useShortcut';
import { Flex } from './ui/flex';
import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { Footer } from './ui/footer';

const Squares = styled(Flex).attrs({
  as: 'ul',
  wrap: 'true',
})`
  width: 390px;
`;

const Square = styled(motion.li)`
  drop-shadow: 2px 2px 5px black;
  width: 100px;
  height: 100px;
  margin: 15px;
  border-radius: 5px;
`;

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

const initialColors = [
  "#1d1",
  "#080",
  "#ffffff",
  "#fff",
  "#888",
  "#11dd11",
];

const shuffle = function (array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  squeezed: {
    scale: 0.9,
    rotate: 5,
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
};

export const Animation4 = () => {
  const [colors, setColors] = useState(initialColors);
  const [squaresSqueezed, setSquaresSqueezed] = useState(false);

  useShortcut({
    eventType: 'keydown',
    eventHandler: () => setSquaresSqueezed(true),
    triggerKey: 'Space',
  });

  useShortcut({
    eventType: 'keyup',
    eventHandler: () => {
      setSquaresSqueezed(false);
      setColors(shuffle([...colors]));
    },
    triggerKey: 'Space',
  });

  return (
    <>
      <LeftArrow to="/3" />
      <Squares>
        {colors.map((background, index) => (
          <Square
            key={background}
            layoutTransition={spring}
            whileHover="squeezed"
            animate={squaresSqueezed ? 'squeezed' : 'initial'}
            variants={variants}
            style={{ background }}
            initial="initial"
            exit="exit" 
          />
        ))}
      </Squares>
      <RightArrow to="/1" />
      <Footer />
    </>
  );
};
