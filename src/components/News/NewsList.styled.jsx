import styled from 'styled-components';
import { motion } from 'framer-motion';

export const List = styled(motion.ul)`
  display: grid;
  grid-row-gap: ${p => p.theme.space[15]}px;
  margin-top: ${p => p.theme.space[15]}px;
    @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-top: 60px;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${p => p.theme.space[12]}px;
    grid-row-gap: 60px;
    }
    @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    } 
`;