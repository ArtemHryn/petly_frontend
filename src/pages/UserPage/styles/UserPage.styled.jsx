import styled from 'styled-components';
import { theme } from '../../../theme';

const UserPageBox = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`

const UserPageTitle = styled.p`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.36;
  }
`;

const PetTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AddPetBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AddPetText = styled.p`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: #111111;
`;
const AddPetBtn = styled.button`
  border: none;
  background-color: transparent;
`;
const PetList = styled.ul`
  margin-top: 26px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 24px;
    width: 821px;
  }
`;

export {
  UserPageTitle,
    PetTitleBox,
    AddPetBox,
    AddPetText,
    AddPetBtn,
    PetList,
    UserPageBox,
};

