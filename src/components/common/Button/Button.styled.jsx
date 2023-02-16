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

const Button = styled.button`
  max-width: 240px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.lg};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.mobile[3]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  transition-property: (color, background-color, border-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    max-width: 180px;
    height: 44px;
    font-size: ${p => p.theme.fontSizes.tablet[5]};
    line-height: ${p => p.theme.lineHeights.tablet[1]};
  }
`;

export const FilledBtn = styled(Button)`
  background-color: ${p => p.theme.backgroundColor.orange};
  color: ${p => p.theme.colors.white};
  :hover,
  :focus {
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

export const OutlineBtn = styled(Button)`
  background-color: ${p => p.theme.backgroundColor.white};
  color: ${p => p.theme.colors.black};
  :hover,
  :focus {
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

export const OutlineSm = styled(Button)`
  max-width: 248px;
  height: 38px;
  background-color: ${p => p.theme.backgroundColor.white};
  color: ${p => p.theme.colors.accent};
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.hightAccent};
    color: ${p => p.theme.colors.hightAccent};
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
