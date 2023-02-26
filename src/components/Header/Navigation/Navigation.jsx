import { Box } from 'components/Box';
import { AuthNav } from './AuthNav';
import { Nav } from './Nav';
import { UserNav } from './UserNav';
import { MenuMob } from '../Menu/MenuMob';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import useWindowDimensions from 'helpers/useWindowDimensions';

export const Navigation = () => {
  const { width } = useWindowDimensions();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {width >= 1280 && (
        <Box as="nav" width="100%">
          <Box as="ul" display="flex" justifyContent="space-between">
            <li>
              <Nav
                display="flex"
                gridGap={'80px'}
                alignItems="center"
                height="100%"
              />
            </li>
            <li>{!isLoggedIn && <AuthNav display="flex" gridGap={[9]} />}</li>
            {isLoggedIn && <UserNav />}
          </Box>
        </Box>
      )}
      {width < 1280 && <MenuMob size={width} />}
    </>
  );
};
