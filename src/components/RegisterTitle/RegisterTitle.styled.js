import styled from 'styled-components';
import { aliases } from 'theme';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: ${({ theme }) => theme.lineHeights[4]};
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[15]}px;

  ${aliases.mediaQueries.medium} {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[9]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;
