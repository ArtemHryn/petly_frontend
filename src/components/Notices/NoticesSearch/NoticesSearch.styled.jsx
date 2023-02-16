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

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding-left: 9px;
  border-color: transparent;
  &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    letter-spacing: 0.04em;

    color: #535353;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 44px;
    padding-left: 20px;

    &::placeholder {
      font-size: 20px;
      line-height: 27px;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-5%, -50%);
`;

export const SearchButton = styled(motion.button)`
  border: none;
  background-color: transparent;
`;
