import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { appContext } from '../../context';
import { Flex } from './flex';
import { ShortcutIcons } from './shortcutIcons';

const StyledFooter = styled(Flex)`
  position: fixed;
  bottom: 25px;
`;
  
const FooterRow = styled(Flex)`
  &:not(:last-of-type) {
    margin-bottom: 35px;
  }

  ${Flex}:not(:last-of-type) {
    margin-right: 25px;
  }
`;

const FooterText = styled(motion.span)`
  color: white;
  margin-right: 10px;
  font-size: 14px;
  text-shadow: 2px 2px 5px black;
`;

const iconVariants = {
  redraw: {
    pathLength: 0,
    transition: {
      yoyo: 1,
    },
    opacity: 0,
  },
};

const textVariants = {
  exit: {
    opacity: 0,
    transition: {
      yoyo: 1,
    },
  },
};

const Texas = () => (
  <motion.svg
    viewBox="0 0 910 845"
    width="18px"
    whileHover="redraw"
    exit="redraw"
    style={{
      overflow: 'visible', 
      filter: 'drop-shadow(2px 2px 5px black)'
    }}
  >
    <motion.path
      d="M251.65,2.5H459.72c.16,49.57.26,99.14.68,148.71,0,2.26,2.47,5.28,4.62,6.61a126.46,126.46,0,0,0,37.9,15.91c15.21,3.58,29.15,12.11,45.48,11.5,6.66-.25,12.2,1.81,14.68,9.71,6.57-8.2,14.46-8.48,23.09-6.6,25,5.47,50,10.75,75,16.06,2.68.57,6.43,2.19,7.94,1,5.28-4,6.47.29,8.25,3.31,2.21,3.77,5.24,7.7,9.36,4.51,6.29-4.86,13.29-3.82,20-4.33,20-1.53,40.24-4.89,60.05-3.33,33.72,2.63,67.14,8.35,98.14,23.55,5,2.45,7.07,4.76,7.08,10.44.07,37.5.48,75,.88,112.5a18.7,18.7,0,0,0,1.38,7.95c6.94,14.12,14,28.18,21.4,42.07,3.5,6.58,7.82,12.72,11.77,19.05v15.07c-1,8.45-1.81,16.89-3.09,25.36-3.71,24.74-3.54,50.29-14.78,73.47-1.37,2.82-4,5.83-6.71,7.06-17.42,7.76-35,15.06-52.61,22.45a42.06,42.06,0,0,1-5,1.46l-.61-1.22,12.2-10.69H822.79l2.06-18.36c-3.92,3-6.21,5.42-8.94,6.84s-5.78,1.75-8.87,2.61c1.6,4.23,3.77,8.78,5.06,13.57,3,11,1.8,12.84-8.14,18.27-3.3,1.8-8.13,4.49-8.51,7.27-1.53,11.4-9.27,18-17.6,23.22-19.11,12-38.94,22.91-58.49,34.22-.23.13-.79-.31-1-.4l4-19L720.79,621c-9,9.94-18.17,10.82-27.58.52C690.57,634,706.12,632.25,707,641.87l-19,9.2-4.72-8.84L680.86,644c.53,3.12,1,6.24,1.58,9.36.84,4.77.24,8.43-3.19,12.91-13.9,18-30.18,34.51-37.33,57-1.11,3.51-3.11,6.73-4.15,8.94-4.27.42-7.36.84-10.46,1s-5.88,0-9.92,0c6.08,7,13.89,1.1,19.56,4.49,2.73,7.52.53,14.12-3.17,20.79-1.5,2.71-2.37,6.66-1.64,9.59,4.51,18.28,9.51,36.44,14.51,54.6.46,1.66,1.77,3.73,3.22,4.37,8.07,3.54,9.16,5.48,6.79,15.46-9.24,0-18.75.14-28.25-.11-2.09-.05-4.15-1.45-6.23-2.24-9.8-3.74-19.37-8.32-29.44-11-14.27-3.83-29-5.86-43.38-9.42-18.14-4.52-31.83-14.19-36.73-33.74a92.82,92.82,0,0,0-8.5-21.67c-10.5-19.14-21.9-37.76-32.49-56.87C452.05,672.11,430,638.2,415.25,600.24c-4.33-11.2-12-20.22-22.74-27.18a110,110,0,0,1-25.81-23.78c-4.36-5.5-8.32-8.22-14.89-9-13.17-1.6-26.48-3-39.34-6-7.15-1.71-12.4-1.37-18.07,3.17-3.18,2.56-7.78,5.76-11.16,5.2-10.11-1.68-12.84,4.84-15.37,11.79A44,44,0,0,0,265,567.58c-.46,13.51-7.81,23.52-15.94,33.21-1,1.19-3.13,2.69-4.22,2.36-9.23-2.8-18.75-5.16-27.39-9.3-8.94-4.27-16.78-10.76-25.5-15.54-6.79-3.71-14.32-6.08-21.34-9.42-11.25-5.35-19.54-13-23.45-25.75-5.37-17.51-13.28-34.26-18.3-51.84-4.54-15.9-14.37-25.28-29.26-30.55a48.78,48.78,0,0,1-22.72-16.56c-7.71-9.94-16.46-19-24.42-28.75-3.43-4.19-7.1-6.43-12.67-6.73A16.91,16.91,0,0,1,30,404.47c-7.36-6.85-14.18-14.27-21.07-21.59-5.37-5.68-7.35-12.33-5.94-21.66h242.9Z"
      strokeWidth={50}
      fill="none"
      stroke="white"
      variants={iconVariants}
      initial={{ pathLength: 1, opacity: 1 }}
    />
  </motion.svg>
);

const GitHub = () => (
  <a href="https://github.com/cstoddart/stodd-art" target="_blank" rel="noreferrer noopener">
    <motion.svg
      viewBox="0 0 33 32"
      width="18px"
      whileHover="redraw"
      exit="redraw"
      style={{
        overflow: 'visible', 
        filter: 'drop-shadow(2px 2px 5px black)'
      }}
    >
      <motion.path
        d="M16.5,0a16.39,16.39,0,0,0-5.22,32c.83.15,1.13-.35,1.13-.79s0-1.42,0-2.79c-4.59,1-5.56-2.2-5.56-2.2A4.38,4.38,0,0,0,5,23.79c-1.5-1,.11-1,.11-1a3.47,3.47,0,0,1,2.53,1.7,3.53,3.53,0,0,0,4.8,1.36,3.5,3.5,0,0,1,1.05-2.19C9.82,23.24,6,21.83,6,15.55a6.33,6.33,0,0,1,1.7-4.4A5.93,5.93,0,0,1,7.83,6.8s1.39-.44,4.54,1.69a15.51,15.51,0,0,1,8.26,0c3.15-2.13,4.53-1.69,4.53-1.69a5.9,5.9,0,0,1,.17,4.35A6.28,6.28,0,0,1,27,15.55c0,6.3-3.85,7.69-7.53,8.09a3.92,3.92,0,0,1,1.12,3c0,2.19,0,4,0,4.5s.3,1,1.14.79A16.4,16.4,0,0,0,16.5,0Z"
        strokeWidth={2}
        fill="none"
        stroke="white"
        variants={iconVariants}
        initial={{ pathLength: 1, opacity: 1 }}
      />
    </motion.svg>
  </a>
);

export const Footer = () => {
  const context = useContext(appContext);

  return (
    <StyledFooter direction="column">
      {context.isMobileDevice
        ? null
        : <FooterRow>
          <ShortcutIcons />
        </FooterRow>
      }
      <FooterRow>
        <Flex>
          <FooterText variants={textVariants} exit="exit">Made In</FooterText>
          <Texas />
        </Flex>
        <Flex>
          <a href="https://github.com/cstoddart/stodd-art" target="_blank" rel="noreferrer noopener">
            <FooterText variants={textVariants} exit="exit">View Source</FooterText>
          </a>
          <GitHub />
        </Flex>
      </FooterRow>
    </StyledFooter>
  );
};
