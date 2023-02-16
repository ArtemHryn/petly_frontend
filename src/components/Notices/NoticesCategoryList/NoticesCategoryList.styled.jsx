import styled from "styled-components";
import { layout, position } from "styled-system";
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

export const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: 500px;
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

export const CardList = styled.ul`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const CardItem = styled.li`
  margin-bottom: 32px;
  background-color: #ffffff;
  height: 606px;

  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: 0px 0px 20px 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 32px) / 2);
    margin-bottom: 0;
  }
`;
