import { Link } from 'components/common/Link/Link';
import { MotionLi } from '../Template/Motion';
import { User } from './Navigation.styled';

export const UserNav = props => {
  return (
    <>
      <MotionLi key={6} variant={props.variants}>
        <Link
          to="/user"
          variant="filled"
          display="flex"
          alignItems="center"
          gridGap="14px"
          fontSize={['14px', '16px']}
        >
          {<User />}Account
        </Link>
      </MotionLi>
    </>
  );
};
