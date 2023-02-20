import { Link } from 'components/common/Link/Link';
import { MotionLi } from '../Template/Motion';

export const UserNav = props => {
  return (
    <>
      <MotionLi key={6} variant={props.variants}>
        <Link to="/user" variant="filled">
          Account
        </Link>
      </MotionLi>
    </>
  );
};
