import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { space } from 'styled-system';
import { motion } from 'framer-motion';

export const Img = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Status = styled.p`
  position: absolute;
  top: 20px;
  left: 0px;
  width: 158px;
  padding: 6px 0px 7px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0 20px 20px 0;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;

  letter-spacing: 0.04em;

  color: #111111;
`;

export const Like = styled(motion.button)`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: none;
`;

export const LikeSvg = styled(AiOutlineHeart)`
  font-size: 28px;
  background: transparent;

  fill: #f59256;
`;

export const IsLikedSvg = styled(AiFillHeart)`
  font-size: 28px;
  background: transparent;

  fill: #f59256;
`;

export const CardTitle = styled.h4`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;

  color: #111111;

  margin-bottom: 20px;
`;

export const NameList = styled.ul`
  margin-right: 40px;
  ${space}
`;
export const ListElement = styled.li`
  margin-bottom: 8px;
  ${space}
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #111111;
`;
