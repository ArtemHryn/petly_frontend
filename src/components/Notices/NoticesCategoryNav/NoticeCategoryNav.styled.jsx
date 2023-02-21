import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { layout, position } from 'styled-system';

export const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: 500px;
    justify-content: flex-start;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: 100%;
    justify-content: flex-start;
  }
`;

export const ButtonElement = styled.li`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-right: 12px;
  }
`;
export const FilterButton = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  padding: 8px 28px;

  text-decoration: none;
  background-color: #ffffff;

  border: 2px solid #f59256;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
  &.active {
    background: #f59256;
    color: #ffffff;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 10px 28px;
  }
`;

export const AddPetButton = styled(motion.button)`
  position: fixed;
  right: 20px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #f59256;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;

  border-radius: 50%;
  border: none;
  box-shadow: ${p => p.theme.shadows.regular};
  z-index: 100;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: none;
  }
  ${layout}
  ${position}
`;
export const AddPetText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #111111;

  margin-right: 12px;
`;
