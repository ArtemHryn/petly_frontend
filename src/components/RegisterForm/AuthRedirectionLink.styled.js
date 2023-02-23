import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { aliases } from 'theme';

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
  letter-spacing: 0.04em;

  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: ${({ theme }) => theme.space[1]}px;
  color: ${({ theme }) => theme.colors.blue};

  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
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
