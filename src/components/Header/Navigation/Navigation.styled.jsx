import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.mobile[8]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  color: ${p => p.theme.colors.links};
  text-decoration: none;
  letter-spacing: 0.04em;
  &.active {
    text-decoration: underline;
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.mobile[10]};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.mobile[5]};
    line-height: ${p => p.theme.lineHeights.mobile[1]};
  }
`;
