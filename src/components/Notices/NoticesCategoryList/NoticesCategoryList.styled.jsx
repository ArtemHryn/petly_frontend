import styled from "styled-components";

export const CardList = styled.ul`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const CardItem = styled.li`
  margin-bottom: 32px;
  background-color: #ffffff;
  height: 626px;

  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: 0px 0px 20px 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 32px) / 2);
    margin-bottom: 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: calc((100% - 32px * 3) / 4);
  }
`;
