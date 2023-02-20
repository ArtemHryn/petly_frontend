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

export const Article = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.mobile[1]};
  line-height: ${p => p.theme.lineHeights.mobile[1]};
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