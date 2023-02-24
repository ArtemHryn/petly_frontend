import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Pagination } from '@mui/material';

export const CardList = styled(motion.ul)`
  margin-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const CardItem = styled.li`
  margin-bottom: 32px;
  background-color: #ffffff;
  height: 626px;

  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: 0px 0px 20px 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 32px) / 2);
    margin-bottom: 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: calc((100% - 32px * 3) / 4);
  }
`;

export const PaginationList = styled(Pagination)`
  display: flex;
  justify-content: center;
  & > ul > li > button {
    color: ${p => p.theme.colors.black};

    &.Mui-selected {
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.white};
      :hover,
      :focus {
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
      }
    }
  }
`;
