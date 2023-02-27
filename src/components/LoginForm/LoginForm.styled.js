import styled from 'styled-components';
import { space } from 'styled-system';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}) {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.regular};

    padding-top: 60px;
    padding-bottom: ${({ theme }) => theme.space[15]}px;
    padding-left: 60px;
    padding-right: 60px;
    border-radius: ${({ theme }) => theme.radii.lg};
    max-width: 608px;
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.desktop}) {
    padding-bottom: 60px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.mobile[5]};
  line-height: ${({ theme }) => theme.lineHeights.mobile[1]};
  letter-spacing: 0.04em;
  width: 100%;

  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  /* margin-bottom: ${({ theme }) => theme.space[8]}px; */
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[6]}px;
  padding-left: ${({ theme }) => theme.space[8]}px;
  padding-right: ${({ theme }) => theme.space[8]}px;

  ${space}
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}) {
    line-height: ${({ theme }) => theme.lineHeights.tablet[4]};
    padding-top: ${({ theme }) => theme.space[7]}px;
    padding-bottom: ${({ theme }) => theme.space[7]}px;
    padding-left: ${({ theme }) => theme.space[12]}px;
    padding-right: ${({ theme }) => theme.space[12]}px;

    background-color: ${({ theme }) => theme.colors.sectionBG};
  }
`;

export const LoginBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.mobile[5]};
  line-height: ${({ theme }) => theme.lineHeights.mobile[1]};
  letter-spacing: 0.04em;
  cursor: pointer;
  background-color: ${({ children, theme }) =>
    children === 'Back' ? 'transparent' : theme.colors.accent};
  color: ${({ children, theme }) =>
    children === 'Back' ? theme.colors.black : theme.colors.white};
  border-width: ${({ theme }) => theme.space[1]}px;
  border-color: ${({ children, theme }) =>
    children === 'Back' ? theme.colors.accent : 'transparent'};
  border-radius: ${({ theme }) => theme.radii.lg};

  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
  padding-left: ${({ theme }) => theme.space[16]}px;
  padding-right: ${({ theme }) => theme.space[16]}px;
  margin-bottom: ${({ theme }) => theme.space[15]}px;
  transition: 100ms linear;
  &:hover {
    transform: scale(1.06);
  }
  &:active {
    transform: scale(1);
  }
`;

export const Error = styled.p`
  position: absolute;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.mobile[0]};
  color: ${({ theme }) => theme.colors.red} ${space};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
  letter-spacing: 0.04em;
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray};
`;
export const Link = styled(NavLink)`
  text-decoration: none;

  margin-left: ${({ theme }) => theme.space[1]}px;
  color: ${({ theme }) => theme.colors.blue};

  background: linear-gradient(to right, #ff6101, #f59256),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 2px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover,
  &:focus {
    background-size: 0 2px, 100% 2px;
  }
`;
