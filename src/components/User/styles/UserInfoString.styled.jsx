import styled from 'styled-components';
import { theme } from '../../../theme';
import { FaPen } from 'react-icons/fa';
import { BsCheckLg } from "react-icons/bs";

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
const UserInfoData = styled.p`
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 141px;
  border-radius: 40px;
  margin-right: 9px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) {
    padding-left: 12px;
    width: 216px;
    font-size: 18px;
    line-height: 1.39;
  }
`
const UserDataChangeBtn = styled.button`
  border: none;
  background-color: transparent;
`
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
const StyledFaPen = styled(FaPen)`
  background: #FDF7F2;
  color: #F59256; 
  backdrop-filter: blur(2px);
  padding: 5px; 
  display: block; 
  font-size: 20px; 
  border-radius: 50%;
`

const StyledCheck = styled(BsCheckLg)`
  background: #FDF7F2;
  color: #F59256; 
  backdrop-filter: blur(2px);
  padding: 5px; 
  display: block; 
  font-size: 20px; 
  border-radius: 50%;
`

export { UserDataChangeBtn, UserInfoData, UserInfoDescr, UserInfoInput, UserInfoItem, StyledFaPen, StyledCheck}