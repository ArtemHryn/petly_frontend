import { Box } from 'components/Box';
import { MotionLi } from '../Template/Motion';
import { Link } from './Navigation.styled';

const links = [
  { to: '/news', label: 'News', key: '1' },
  { to: '/notices', label: 'Find pet', key: '2' },
  { to: '/friends', label: 'Our friends', key: '3' },
];

export const Nav = props => {
  return (
    <>
      <Box as="ul" {...props}>
        {links.map(({ to, label, key }) => (
          <MotionLi key={key}>
            <Link to={to}>{label}</Link>
          </MotionLi>
        ))}
      </Box>
    </>
  );
};
