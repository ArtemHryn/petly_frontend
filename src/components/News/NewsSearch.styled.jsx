import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Label = styled.label`
  display: block;
  position: relative;
  margin: 0 auto 28px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin: 0 auto 40px;
    max-width: 608px;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: ${p => p.theme.space[15]}px;
  background: ${p => p.theme.backgroundColor.white};
  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: ${p => p.theme.radii.md};
  border-color: transparent;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[9]}px;
  padding-left: ${p => p.theme.space[9]}px;
  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.mobile[3]};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.mobile[0]};
    color: #535353;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes.tablet[5]};
  }
}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: ${p => p.theme.space[17]}px;
  }
`;

export const SearchBtnContainer = styled.div`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-5%, -50%);
`;

export const Button = styled(motion.button)`
  cursor: pointer;
  background-color: transparent;
  border: ${p => p.theme.borders.none};
`;
