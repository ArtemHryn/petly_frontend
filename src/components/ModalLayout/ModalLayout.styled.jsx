import { motion } from 'framer-motion';

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
  max-width: calc(100% - 40px);
  width: 90vw;
  height: 80vh;
  padding: 30px 20px 40px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow-y: scroll;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 20px 20px 32px;
    max-width: 704px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding: 12px 20px 32px;
    max-width: 704px;
  }
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
