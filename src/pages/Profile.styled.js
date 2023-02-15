import styled from 'styled-components';
import { theme } from '../theme';

// profileMain

const UserPageBox = styled.div`
  width: 320px;
  background: #fdf7f2;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
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
const UserBox = styled.div`
  width: 252px;
  margin-top: 18px;
  margin-bottom: 47px;
  padding: 20px 23px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    width: 736px;
    height: 311px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 0px 40px 40px 0px;
    margin-left: 0;
    padding: 40px 40px 24px 32px;
    justify-content: start;
  }
`;
const UserPhotoBox = styled.div``;
const UserPhoto = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-left: 52px;
  }
`;
const UserPhotoForm = styled.form`
  margin-bottom: 32px;
`;
const UserPhotoLabel = styled.label`
  font-family: ${theme.fonts.main};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  display: flex;
  align-items: center;
  justify-content: end;
  letter-spacing: 0.04em;
  color: #111111;
`;
const UserInfoTable = styled.table`
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;
const UserInfoTr = styled.tr`
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;
const UserInfoTh = styled.th`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;
const UserInfoTd = styled.td``;
const UserInfoInput = styled.input`
  border: none;
  background-color: transparent;
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 141px;
  border-radius: 40px;
  margin-right: 9px;

  :focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  ::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #111111;
  }

  @media screen and (min-width: 768px) {
    padding-left: 12px;
    width: 216px;

    ::placeholder {
      font-size: 18px;
      line-height: 1.39;
    }
  }
`;
const LogOutBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-left: auto;
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  display: flex;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);

  @media screen and (min-width: 768px) {
    margin-left: 0;
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
`;
const PetItem = styled.li`
  position: relative;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px 40px;

  :not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    display: flex;
  }
`;
const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 31px;
  }
`;
const DeletePetBtn = styled.button`
  position: absolute;
  top: 252px;
  right: 20px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 20px;
  }
`;
const PetInfoList = styled.ul``;
const PetInfoItem = styled.li`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export {
  UserPageBox,
  UserPageTitle,
  UserBox,
  UserPhotoBox,
  UserPhoto,
  UserPhotoForm,
  UserPhotoLabel,
  UserInfoTable,
  UserInfoTr,
  UserInfoTh,
  UserInfoTd,
  UserInfoInput,
  LogOutBtn,
  PetTitleBox,
  AddPetBox,
  AddPetText,
  AddPetBtn,
  PetList,
  PetItem,
  PetPhoto,
  DeletePetBtn,
  PetInfoList,
  PetInfoItem,
};

// ProfileModal

const AddPetModalBox = styled.div``;
const AddPetModalTitle = styled.p``;
const AddPetodalForm = styled.form``;
const AddPetModalLabel = styled.label``;
const AddPetodalTextInput = styled.input``;
const AddPetodalFileInput = styled.input``;
const AddPetodalTextarea = styled.textarea``;
const AddPetodalBtnList = styled.ul``;
const AddPetodalBtnItem = styled.li``;
const AddPetModalOkBtn = styled.button``;
const AddPetModalNoBtn = styled.button``;

export {
  AddPetModalBox,
  AddPetModalTitle,
  AddPetodalForm,
  AddPetModalLabel,
  AddPetodalTextInput,
  AddPetodalFileInput,
  AddPetodalTextarea,
  AddPetodalBtnList,
  AddPetodalBtnItem,
  AddPetModalOkBtn,
  AddPetModalNoBtn,
};
