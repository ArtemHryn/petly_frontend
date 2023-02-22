import styled from 'styled-components';
import { color, space, border, flexbox } from 'styled-system';
import { motion } from 'framer-motion';
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