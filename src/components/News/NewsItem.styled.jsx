import styled from 'styled-components';

export const Item = styled.li`
`;

export const Gradient = styled.span`
  display: block;
  width: 200px;
  height: ${p => p.theme.space[2]}px;
  background: ${p => p.theme.colors.gradient};
  border-radius: ${p => p.theme.radii.lg};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 280px;
    height: ${p => p.theme.space[4]}px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 340px;
  }
`;

export const ItemTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.mobile[6]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  height: 66px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.mobile[3]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  font-weight: ${p => p.theme.fontWeights.light};
  padding-top: ${p => p.theme.space[8]}px;
  color: #111321;
`;

export const BottomContainer = styled.div`
  display: flex;
  padding-top: ${p => p.theme.space[9]}px;
  justify-content: space-between;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding-top: ${p => p.theme.space[15]}px;
  }
`;

export const ItemDate = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.mobile[3]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  font-weight: ${p => p.theme.fontWeights.light};
  color: ${p => p.theme.colors.gray};
`;

export const Link = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile[3]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  cursor: pointer;
  &:focus,
  &:hover {
    font-weight: ${p => p.theme.fontWeights.semiBold};
    transform: scale(1.05);
    }
`;