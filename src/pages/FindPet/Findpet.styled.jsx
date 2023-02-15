import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  /* Тень для карточек */

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding: 12px 9px;
  border-color: transparent;
  &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #535353;
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

export const ButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

export const ButtonElement = styled.li`
  margin-bottom: 12px;
`;
export const FilterButton = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 8px 28px;
  gap: 8px;

  background: #ffffff;
  /* Акцентный */

  border: 2px solid #f59256;
  border-radius: 40px;

`;
