import styled from 'styled-components';
import { theme } from '../../../theme';

const UserBox = styled.div`
  width: 280px;
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
    margin-left: -32px;
    padding: 40px 40px 24px 32px;
    justify-content: start;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 411px;
    height: 563px;
    margin-left: -16px;
    padding: 20px 16px 18px;
    margin-right: 32px;
    margin-top: 24px;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
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

const UserInfoList = styled.ul`
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`
const UserInfoItem = styled.li`
  display: flex;
  margin-bottom: 12px;
  width: 252px;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    width: 379px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 15px;
  }
`
const UserInfoDescr = styled.p`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  width: 56px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    width: 83px;
  }
`
const UserInfoLabel = styled.label``
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
    outline: 1px solid rgba(245, 146, 86, 0.5);
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

export {
    UserBox,
    UserPhotoBox,
    UserPhoto,
    UserPhotoForm,
    UserPhotoLabel,
    UserInfoList,
    UserInfoItem,
    UserInfoDescr,
    UserInfoLabel,
    UserInfoInput,
    LogOutBtn}