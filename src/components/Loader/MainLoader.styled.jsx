import styled, { keyframes } from 'styled-components';

const uiverse723 = keyframes`
0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
     54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }
    50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
     51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
  `;

export const MainLoaderPart = styled.span`
  top: 50%;
  left: 50%;
  font-family: 'Cormorant SC';
  position: absolute;
  color: #fff;
  transform: translate(-50%, -50%);
  font-size: 50px;
  letter-spacing: 5px;
  color: transparent;
  -webkit-text-stroke: 0.3px #9072af;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 150px;
  }
`;

export const AdditionalLoaderPart = styled.span`
  top: 50%;
  left: 50%;
  font-family: 'Cormorant SC';
  position: absolute;
  color: #fff;
  transform: translate(-50%, -50%);
  font-size: 50px;
  letter-spacing: 5px;
  color: ${p => p.theme.colors.accent};
  -webkit-text-stroke: 1px ${p => p.theme.colors.accent};
  animation: ${uiverse723} 3s ease-in-out infinite;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 150px;
  }
`;
