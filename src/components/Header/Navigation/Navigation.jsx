import { Box } from 'components/Box';
import { AuthNav } from './AuthNav';
import { Nav } from './Nav';
import { UserNav } from './UserNav';
import { useState } from 'react';
import { MenuMob } from '../Menu/MenuMob';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';

export const Navigation = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      {windowSize.innerWidth >= 1280 && (
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
      {windowSize.innerWidth < 1280 && <MenuMob size={windowSize.innerWidth} />}
    </>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
