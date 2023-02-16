import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  margin-left: ${({ theme }) => theme.space[1]}px;
  color: ${({ theme }) => theme.colors.blue};
`;
