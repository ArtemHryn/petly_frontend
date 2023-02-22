import styled from 'styled-components';
import { color, space, border, flexbox } from 'styled-system';
import { motion } from 'framer-motion';
import { GiFemale, GiMale } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import { Box } from 'components/Box';

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

export const Lable = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;

  border: 2px solid #f59256;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  color: #000000;
  input:checked + & {
    background-color: #f59256;
    color: #ffffff;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 27px;
    padding: 10px 28px;
  }
`;

export const Input = styled.input`
  appearance: none;
  order: 2;
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

export const SexTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 8px;

  color: #000000;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

export const SexLabel = styled.label`
  display: block;
  width: 95px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #000000;
  border-radius: 20px;
  padding: 5px 10px;
  &:hover {
  }
  input:checked + & {
    color: #f59256;
    scale: 0.9;
    box-shadow: inset 0px 0px 15px -4px rgba(245, 146, 86, 0.5);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
  }
`;

export const SexIcons = styled(GiFemale)`
  font-size: 60px;
  fill: #ff8787;
  filter: drop-shadow(2px 3px 3px #000);
`;

export const SexIconsMale = styled(GiMale)`
  font-size: 60px;
  fill: #23c2ef;
  filter: drop-shadow(2px 3px 3px #000);
`;

export const SexInput = styled(Input)`
  display: flex;
  order: 2;
`;

export const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 116px;
  background: #fdf7f2;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 140px;
    height: 140px;
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

export const CommentInput = styled(InputEnter)`
  margin-top: 0px;
  margin-bottom: 40px;
  resize: none;
  ${border}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    min-height: 113px;
    border-radius: 20px;
  }
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