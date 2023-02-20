import { Box } from 'components/Box';
import { Link } from 'components/common/Link/Link';
import { MotionLi } from '../Template/Motion';

const links = [
  { to: '/login', label: 'Login', key: '4' },
  { to: '/register', label: 'Registration', key: '5' },
];

export const AuthNav = props => {
  return (
    <>
      <Box as="ul" {...props}>
        {links.map(({ to, label, key }) => (
          <MotionLi key={key} variant={props.variants}>
            <Link to={to} variant="outline">
              {label}
            </Link>
          </MotionLi>
        ))}
      </Box>
    </>
  );
};
