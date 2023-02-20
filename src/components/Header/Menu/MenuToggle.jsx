import * as React from 'react';
import { motion } from 'framer-motion';
import { ToggleBtn } from './Menu.styled';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3.2"
    stroke="#212121"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <ToggleBtn onClick={toggle}>
    <svg width="30" height="20" viewBox="0 0 30 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 30 2.5', strokeLinecap: 'none' },
          open: { d: 'M 3 16.5 L 17 2.5', strokeLinecap: 'round' },
        }}
      />
      <Path
        d="M 2 9.423 L 30 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 30 16.346', strokeLinecap: 'none' },
          open: { d: 'M 3 2.5 L 17 16.346', strokeLinecap: 'round' },
        }}
      />
    </svg>
  </ToggleBtn>
);
