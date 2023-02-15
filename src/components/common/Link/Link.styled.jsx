import { Link } from 'react-router-dom';
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
  typography,
} from 'styled-system';

const NavLink = styled(Link)`
display: inline-block;
  padding: 6px 26px;
  letter-spacing: 0.04em;
  text-decoration: none;
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.lg};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.mobile[1]};
  line-height: ${p => p.theme.lineHeights.mobile[1]};
  transition-property: (color, background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    padding: 8px 26px;
    font-size: ${p => p.theme.fontSizes.tablet[5]};
    line-height: ${p => p.theme.lineHeights.tablet[1]};
  }
`;

export const FilledLink = styled(NavLink)`
  background-color: ${p => p.theme.backgroundColor.orange};
  color: ${p => p.theme.colors.white};
  :hover,
  :focus {
    background-color: ${p => p.theme.backgroundColor.white};
    color: ${p => p.theme.colors.black};
  }
  &.active {
    background-color: ${p => p.theme.backgroundColor.white};
    color: ${p => p.theme.colors.black};
  }
  ${color};
  ${layout};
  ${background};
  ${border};
  ${position};
  ${shadow};
  ${typography};
  ${flexbox};
  ${grid};
  ${space};
`;

export const OutlineLink = styled(NavLink)`
  background-color: ${p => p.theme.backgroundColor.white};
  color: ${p => p.theme.colors.black};
  :hover,
  :focus {
    background-color: ${p => p.theme.backgroundColor.orange};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background-color: ${p => p.theme.backgroundColor.orange};
    color: ${p => p.theme.colors.white};
  }
  ${color};
  ${layout};
  ${background};
  ${border};
  ${position};
  ${shadow};
  ${typography};
  ${flexbox};
  ${grid};
  ${space};
`;
