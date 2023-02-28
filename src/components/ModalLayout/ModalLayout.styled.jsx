import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

export const ModalLayoutBox = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const ModalContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: 280px;
  width: 90vw;
  height: 80vh;

  padding: 60px 20px 40px;
  background-color: #ffffff;

  border-radius: 20px;
  overflow-y: scroll;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 32px 24px 32px 20px;
    max-width: 704px;
    height: 100%;
    max-height: 540px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    overflow: hidden;
  }
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto 49px;
  background-color: transparent;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 62px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 29px;
  }
`;

export const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: #fdf7f2;
  width: 34px;
  height: 34px;

  backdrop-filter: blur(2px);
  cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 22px;

  fill: black;
`;
