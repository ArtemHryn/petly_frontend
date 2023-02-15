import styled from 'styled-components';
import { space } from 'styled-system';

export const TitleEl = styled.h1`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes[6]};
  line-height: ${p => p.theme.lineHeights[4]};

  color: ${p => p.theme.colors.black};
  text-align: center;
  ${space}
`;
