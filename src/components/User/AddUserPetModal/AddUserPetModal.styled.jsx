import styled from "styled-components"
import { color, space, flexbox } from 'styled-system';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import { Box } from 'components/Box';

export const Wrapper = styled(Box)`
  border-radius: 40px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid rgba(245, 146, 86, 0.5);

  & fieldset {
   border: none;
  }
  & input {
    background-color: #fdf7f2;

    width: 100%;
    padding: 11px 20px 12px 20px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: rgba(17, 17, 17, 0.6);
    @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
      font-size: 20px;
    }
  }
`;

export const Title = styled.h4`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const Warning = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;

  color: #111111;
  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 27px;
  }
  ${color}
`;

export const LabelTitle = styled.label`
  display: block;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;

  color: #111111;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 24px;
    line-height: 26px;
  }
  ${space}
`;

export const InputEnter = styled.input`
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 8px;
  padding: 11px 20px 12px 20px;
  ${space}
`;

export const ActionButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  cursor: pointer;

  border-radius: 40px;
  border: 2px solid #f59256;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: #ffffff;
  background: #f59256;
  ${color}
  ${space}
  ${flexbox}
`;

export const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  background: #fdf7f2;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 12px;
  margin-top: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 182px;
    height: 182px;
  }
`;

export const FileIcon = styled(AiOutlinePlus)`
  font-size: 50px;
  fill: rgba(17, 17, 17, 0.6);
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 70px;
  }
`;

export const ImgFile = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const LabelContainer = styled(Box)`
  margin-bottom: 8px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 12px;
  }
  ${space}
`;

export const Error = styled.p`
  margin-top: 8px;
  color: red;
  font-style: italic;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;

const AddPhotoLabel = styled.label`
    font-family: ${p => p.theme.colors.main};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.47;
    display: flex;
    color: #111111;
    justify-content: center;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1.1;
    }
`
const AddPetModalFileInput = styled.input``;
const AddPetModalTextarea = styled.textarea`
    width: 240px;
    height: 100px;
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 20px;
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 12px 14px;
    color: rgba(27, 27, 27, 0.6);
    resize: none;
    overFlow: hidden;

    ::placeholder {
        font-family: ${p => p.theme.colors.main};
        font-weight: 400;
        font-size: 14px;
        line-height: 1.36;
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        height: 116px;
        padding: 11px 16px;
        margin-top: 12px;
        margin-bottom: 28px;

        ::placeholder {
            font-size: 16px;
            line-height: 1.63;
        }
    }
`;

export {
    AddPetModalFileInput,
    AddPhotoLabel,
    AddPetModalTextarea,
};