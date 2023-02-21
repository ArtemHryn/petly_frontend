import styled from 'styled-components';
import { theme } from '../../theme';
import noPets from "../../images/noPets.jpg"
import noPetsMob from "../../images/noPetsMob.jpg"

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

  :hover {
    transform: scale(1.3);
  }
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

const NoUserPetsBox = styled.div`
  width: 280px;
  height: 140px;
  margin-top: 18px;
  margin-bottom: 47px;
  padding: 20px 23px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${noPetsMob});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  @media screen and (min-width: 768px) {
    width: 736px;
    height: 311px;
    border-radius: 40px 0px 0px 40px;
    margin-left: -32px;
    padding: 40px 40px 24px 32px;
    justify-content: start;
  }

  @media screen and (min-width: 1280px) {
    width: 411px;
    height: 590px;
    margin-left: auto;
    padding: 20px 16px 18px;
    margin-top: 24px;
    background-image: url(${noPets});
  }
`

const NoPetsText = styled.p`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  color: #111111;
  text-align: right;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1280px) {
    text-align: center;
    font-size: 26px
  }
`

export {
  UserPageTitle,
    PetTitleBox,
    AddPetBox,
    AddPetText,
    AddPetBtn,
    PetList,
    UserPageBox,
    NoUserPetsBox,
    NoPetsText
};

