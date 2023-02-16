import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: ${p => p.theme.space[15]}px;
  background: ${p => p.theme.backgroundColor.white};
  margin-top: ${p => p.theme.space[15]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[9]}px;
  padding-left: ${p => p.theme.space[9]}px;
  border-color: transparent;
  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: ${p => p.theme.radii.md};
  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.mobile[3]};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.mobile[0]};
    color: #535353;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes.tablet[5]};
  }
}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: ${p => p.theme.space[17]}px;
  }
`;

export const SearchBtnContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-5%, -50%);
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: ${p => p.theme.borders.none};
`;

export const NewsList = styled.ul`
  display: grid;
  grid-row-gap: ${p => p.theme.space[15]}px;
  margin-top: ${p => p.theme.space[15]}px;
    @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-top: 60px;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${p => p.theme.space[12]}px;
    grid-row-gap: 60px;
    }
    @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    } 
`;