import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledShortcutKey = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || '25px'};
  height: 20px;
  color: #223;
  background-color: white;
  box-shadow: 3px 3px rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  font-size: 8px;

  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

const shortcutKeyUp = {
translateY: 0,
boxShadow: '3px 3px 1px 0 rgba(255, 255, 255, 0.5)',
};

const shortcutKeyDown = {
translateY: -4,
boxShadow: '2px 2px 1px 0 rgba(255, 255, 255, 0.5)',
};

const spaceBarVariants = {
initial: shortcutKeyUp,
// animate: {
//   translateY: [
//     shortcutKeyUp.translateY,
//     shortcutKeyDown.translateY,
//     shortcutKeyUp.translateY,
//     shortcutKeyDown.translateY,
//     shortcutKeyUp.translateY,
//     shortcutKeyUp.translateY,
//   ],
//   boxShadow: [
//     shortcutKeyUp.boxShadow,
//     shortcutKeyDown.boxShadow,
//     shortcutKeyUp.boxShadow,
//     shortcutKeyDown.boxShadow,
//     shortcutKeyUp.boxShadow,
//     shortcutKeyUp.boxShadow,
//   ],
//   times: [
//     0 / 6,
//     1 / 6,
//     2 / 6,
//     3 / 6,
//     4 / 6,
//     5 / 6,
//     6 / 6,
//   ],
//   transition: {
//     duration: 1.5,
//     repeatDelay: 2,
//     loop: 3,
//   },
// },
exit: {
  opacity: 0,
  transition: {
    yoyo: 1,
  },
},
};

const ShortcutKey = ({ width, children }) => (
  <StyledShortcutKey
    // whileHover="animate"
    variants={spaceBarVariants}
    initial="initial"
    // animate="animate"
    width={width}
    exit="exit"
  >
    {children}
  </StyledShortcutKey>
);

export const ShortcutIcons = () => (
  <>
    <ShortcutKey>{'<'}</ShortcutKey>
    <ShortcutKey>{'>'}</ShortcutKey>
    <ShortcutKey width="75px">Space</ShortcutKey>
  </>
);
