import { motion } from 'framer-motion';
import styled from 'styled-components';
import { space, color, layout, flexbox, border } from 'styled-system';

export const AnimatedBox = styled(motion.div)`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
`;
