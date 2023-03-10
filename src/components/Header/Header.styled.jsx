import { Text } from 'components/common/Text/Text';
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

export const Head = styled.header`
  display: flex;
  @media screen and (max-width: 1279.5px) {
    justify-content: space-between;
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

export const LogoText = styled(Text)`
  font-family: ${p => p.theme.fonts.logo};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile[7]};
  line-height: ${p => p.theme.lineHeights.mobile[5]};
  color: #000000;
  letter-spacing: 0.07em;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.mobile[8]};
    line-height: ${p => p.theme.lineHeights.mobile[3]};
  }
`;

export const Accent = styled.span`
  font-family: ${p => p.theme.fonts.logo};
  font-weight: ${p => p.theme.fonts.bold};
  font-size: ${p => p.theme.fontSizes.mobile[7]};
  line-height: ${p => p.theme.lineHeights.mobile[8]};
  color: ${p => p.theme.colors.accent};
  letter-spacing: 0.07em;
`;
