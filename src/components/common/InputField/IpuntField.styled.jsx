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

export const Input = styled.input`
  padding: 11px 14px 12px 14px;
  height: 40px;
  width: 100%;
  max-width: 240px;
  background-color: ${p => p.theme.backgroundColor.accent};
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.input};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.light};
  font-size: ${p => p.theme.fontSizes.mobile[1]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  transition-property: (border-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :focus-visible,
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.accent};
    outline: none;
  }
  ::placeholder {
    color: ${p => p.theme.colors.gray};
  }
  @media screen and (min-width: 768px) {
    padding: 11px 16px 10px 16px;
    max-width: 448px;
    height: 48px;
    font-size: ${p => p.theme.fontSizes.tablet[3]};
    line-height: ${p => p.theme.lineHeights.tablet[6]};
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
