import styled, { css } from 'styled-components';
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

export const H1 = styled('h1')(
  css`
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fonts.bold};
    font-size: ${p => p.theme.fontSizes.mobile[6]};
    line-height: ${p => p.theme.lineHeights.mobile[3]};
    color: ${p => p.theme.colors.black};
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.tablet[10]};
    }
  `,
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  typography
);

export const H2 = styled('h2')(
  css`
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fonts.bold};
    font-size: ${p => p.theme.fontSizes.mobile[7]};
    line-height: ${p => p.theme.lineHeights.mobile[2]};
    color: ${p => p.theme.colors.black};
  `,
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  typography
);
