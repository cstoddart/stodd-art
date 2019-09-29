import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import { useShortcut } from '../hooks/useShortcut';
import { Flex } from './ui/flex';
import { LeftArrow } from './ui/leftArrow';
import { RightArrow } from './ui/rightArrow';
import { Footer } from './ui/footer';

const Squares = styled(Flex).attrs({
  as: 'ul',
  wrap: 'true',
})`
  width: 260px;
`;

const Square = styled(motion.li)`
  box-shadow: 2px 2px 5px black;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

const initialSquares = [
  { color: '#1d1', key: 1 },
  { color: '#080', key: 2 },
  { color: '#1d1', key: 3 },
  { color: '#080', key: 4 },
  { color: '#1d1', key: 5 },
  { color: '#080', key: 6 },
  { color: '#1d1', key: 7 },
  { color: '#080', key: 8 },
  { color: '#1d1', key: 9 },
];

const shuffle = function (array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

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
  squeeze: {
    scale: 0.8,
    rotate: 90,
  },
  exit: {
    rotate: 1080,
    opacity: 0,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      yoyo: 1,
    },
  },
};

export const Animation4 = () => {
  const [squares, setSquares] = useState(initialSquares);
  const controls = useAnimation();

  const squeezeSquares = () => controls.start('squeeze');
  
  const shuffleSquares = () => {
    controls.start('initial');
    controls.start({ rotate: 0 });
    setSquares(shuffle([...squares]));
  };

  const hoverSquare = (event) => (
    controls.start((id) => (
      event.target.id === id.toString()
        ? variants.hover
        : {}
    ))
  );

  useShortcut({
    eventType: 'keydown',
    eventHandler: squeezeSquares,
    triggerKey: 'Space',
  });

  useShortcut({
    eventType: 'keyup',
    eventHandler: shuffleSquares,
    triggerKey: 'Space',
  });

  return (
    <>
      <LeftArrow to="/3" />
      <Squares>
        {squares.map((square, index) => (
          <Square
            key={square.key}
            custom={square.key}
            id={square.key}
            color={square.color}
            animate={controls}
            layoutTransition={spring}
            variants={variants}
            exit="exit"
            onMouseEnter={hoverSquare}
            onTapStart={squeezeSquares}
            onTap={shuffleSquares}
            onTapCancel={shuffleSquares}
          />
        ))}
      </Squares>
      <RightArrow to="/1" />
      <Footer />
    </>
  );
};
