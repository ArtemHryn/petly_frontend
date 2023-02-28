import { Box } from 'components/Box';
import styled, { keyframes } from 'styled-components';
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

export const Section = styled.section`
  position: relative;
  padding-top: 60px;
  background-color: ${p => p.theme.colors.sectionBG};
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding-top: 88px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 4.688vw;
  }
`;

export const Wrap = styled(Box)`
  margin: 0 auto;
  /* padding: 0 20px; */
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 1.25vw;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const PetImg = styled.img`
  margin: 0 auto;
  max-height: 337px;
  @media screen and (min-width: 768px) {
    min-height: 715px;
  }
  @media screen and (min-width: 1280px) {
    min-height: auto;
    max-height: 100%;
    margin: 0;
    width: 46.094vw;
  }
`;

export const BgImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  max-width: 620px;
  /* max-height: 470px; */
  /* height: 100%; */
  transform: translate(-40%, 9%) rotate(6deg);
  @media screen and (min-width: 768px) {
    width: 1375px;
    /* height: 1098px; */
    max-width: 1375px;
    max-height: none;
    height: auto;
    transform: translate(-38%, 9%);
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: none;
    transform: translate(-50%, 0%);
  }
`;

const animationUnion = keyframes`
 0% { width: 6vw; }
 50% { width: 8vw;  }
 100% { width: 6vw;  }
`;

export const HeartImg = styled.img`
  position: absolute;
  top: 3.281vw;
  left: 2.969vw;
  width: 7.182vw;
  animation-name: ${animationUnion};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.bold};
  font-size: ${p => p.theme.fontSizes.mobile[8]};
  line-height: ${p => p.theme.lineHeights.mobile[3]};
  color: ${p => p.theme.colors.black};

  margin-bottom: 58px;
  @media screen and (max-width: 767.5px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: ${p => p.theme.fontSizes.mobile[11]};
    line-height: 1.47;
    margin-bottom: 118px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 2.5vw;
    width: 45.94vw;
    font-size: 5.313vw;
    line-height: 7.813vw;
  }
  ${space};
  ${layout};
`;
