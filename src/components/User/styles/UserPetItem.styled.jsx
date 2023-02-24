import styled from 'styled-components';
import { IoTrashSharp } from 'react-icons/io5';

export const Trash = styled(IoTrashSharp)`
  color: rgba(17, 17, 17, 0.6); 
  font-size: 20px;
`

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

  @media screen and (min-width: 1280px) {
    :not(:last-child) {
      margin-bottom: 22px;
    }
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

  @media screen and (min-width: 1280px) {
    margin-right: 32px;
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
    background: #FDF7F2;
    backdrop-filter: blur(2px);
    padding: 10px;
    border-radius: 50%;
    display: block;
  }
`;
const PetInfoList = styled.ul``;
const PetInfoItem = styled.li`
  font-family: ${p => p.theme.colors.main};
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
  PetItem,
  PetPhoto,
  DeletePetBtn,
  PetInfoList,
  PetInfoItem,
};