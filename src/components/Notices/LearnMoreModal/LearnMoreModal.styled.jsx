import styled from 'styled-components';
import { layout, space, typography } from 'styled-system';
import { motion } from 'framer-motion';

export const Img = styled.img`
  border-radius: 0px 0px 40px 40px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 288px;
    height: 328px;
    object-fit: cover;
  }
`;

export const CardTitle = styled.h4`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: #000000;

  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const ListElement = styled.li`
  display: flex;
  margin-bottom: 8px;
`;
export const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 16px;
    line-height: 22px;

    color: #000000;
  }

  ${layout}
  ${typography}
`;

export const Comment = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
  ${typography}
  ${space}
`;

export const Hidden = styled.p`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const ContactLink = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  letter-spacing: 0.04em;
  text-decoration: none;
  height: 40px;
  margin-bottom: 12px;
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.lg};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.mobile[1]};
  line-height: ${p => p.theme.lineHeights.mobile[1]};
  background-color: ${p => p.theme.backgroundColor.orange};
  color: ${p => p.theme.colors.white};

  ${layout};
  ${typography};
  ${space};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 160px;
    height: 40px;
    margin-bottom: 0;
    order: 1;

  }
`;

export const AddTo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  letter-spacing: 0.04em;
  text-decoration: none;
  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.lg};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.mobile[1]};
  line-height: ${p => p.theme.lineHeights.mobile[1]};

  height: 44px;
  background-color: ${p => p.theme.backgroundColor.white};
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 160px;
    height: 40px;
    margin-right: 12px;
  }

  ${layout};
  ${typography};
  ${space};
`;
