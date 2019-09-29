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
  box-shadow:
    3px 3px rgba(255, 255, 255, 0.5),
    2px 2px 5px black;
  border-radius: 3px;
  font-size: 8px;

  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

const shortcutKeyVariants = {
  initial: {
    translateY: 0,
    boxShadow: '3px 3px 1px 0 rgba(255, 255, 255, 0.5), 2px 2px 5px black',
  },
  exit: {
    opacity: 0,
    transition: {
      yoyo: 1,
    },
  },
};

const ShortcutKey = ({ width, children }) => (
  <StyledShortcutKey
    variants={shortcutKeyVariants}
    initial="initial"
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
