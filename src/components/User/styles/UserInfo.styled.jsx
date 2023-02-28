import styled from 'styled-components';
import { MdPhotoCamera } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';


const PhotoEdiotContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`

export const Camera = styled(MdPhotoCamera)`
  color: #F59256;
  margin-right: 5px;
  width: 18px;
  height: 18px;
`
export const LogOutIcon = styled(FiLogOut)`
  color: #F59256; 
  margin-right: 8px; 
  font-size:'18p;'
`

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
    height: 590px;
    margin-left: -16px;
    padding: 20px 16px 18px;
    margin-right: 32px;
    margin-top: 24px;
  }
`;
const UserPhotoBox = styled.div``;
const UserPhoto = styled.img`
  object-fit: cover;
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
  font-family: ${p => p.theme.colors.main};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  display: flex;
  align-items: center;
  justify-content: end;
  letter-spacing: 0.04em;
  color: #111111;
  cursor: pointer;
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


const LogOutBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-left: auto;
  font-family: ${p => p.theme.colors.main};
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
  LogOutBtn,
  PhotoEdiotContainer,
};