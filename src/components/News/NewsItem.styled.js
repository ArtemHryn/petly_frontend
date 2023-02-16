import styled from 'styled-components';
import { aliases } from 'theme';

export const Item = styled.li`
`;

export const Gradient = styled.span`
  display: block;
  width: 200px;
  height: ${p => p.theme.space[2]}px;
  background: ${p => p.theme.colors.gradient};
  border-radius: ${p => p.theme.radii.lg};
   ${aliases.mediaQueries.medium} {
      width: 280px;
      height: ${p => p.theme.space[4]}px;
  }
   ${aliases.mediaQueries.large} {
      width: 340px;
      height: ${p => p.theme.space[4]}px;
  }
`;

export const ItemTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes[6]};
  line-height: ${p => p.theme.lineHeights[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  height: 66px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights[3]};
  font-weight: ${p => p.theme.fontWeights.light};
  padding-top: ${p => p.theme.space[8]}px;
  color: #111321;
`;

export const BottomContainer = styled.div`
  display: flex;
  padding-top: ${p => p.theme.space[9]}px;
  justify-content: space-between;
    ${aliases.mediaQueries.medium} {
    padding-top: ${p => p.theme.space[15]}px;
  }
    ${aliases.mediaQueries.large} {
    padding-top: ${p => p.theme.space[15]}px;
  }
`;

export const ItemDate = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights[3]};
  font-weight: ${p => p.theme.fontWeights.light};
  color: ${p => p.theme.colors.gray};
`;

export const Link = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights[3]};
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  cursor: pointer;
  &:focus,
  &:hover {
    font-weight: ${p => p.theme.fontWeights.semiBold};
    transform: scale(1.05);
    }
`;