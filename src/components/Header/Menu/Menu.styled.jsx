import styled from 'styled-components';
// import {
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   background,
//   border,
//   position,
//   shadow,
//   typography,
// } from 'styled-system';
import {  motion } from 'framer-motion';


export const MotionBkg = styled(motion.div)`
  position: absolute;
  top: -16px;
  right: -20px;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.colors.sectionBG};
  @media screen and (min-width: 768px) {
    top: -24px;
    right: -32px;
  }
  @media screen and (min-width: 900px) {
    width: 450px;
  }
  z-index: 20;
`;

export const MotionBackDrop = styled(motion.div)`
  position: absolute;
  top: -16px;
  right: -20px;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.colors.gray};
  @media screen and (min-width: 768px) {
    top: -24px;
    right: -32px;
  }
  z-index: 10;
`;

export const MotionNav = styled(motion.nav)`
  position: relative;
  width: 100%;
  /* max-width:768px ; */
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 900px) {
    width: calc(450px - 32px);
  }
`;

export const MotionUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 25px; */
  position: absolute;
  top: 88px;
  transform: translateX(50%);
  width: 100%;
  gap: 60px;
  right: calc((100% + 83.4px) / 2);
  @media screen and (min-width: 768px) {
    top: 136px;
    right: calc((100% + 95.3px) / 2);
  }
  @media screen and (min-width: 900px) {
    right: calc((100% - 32px) / 2);
  }
  z-index: 20;
`;

export const ToggleBtn = styled.button`
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  z-index: 20;
`;
