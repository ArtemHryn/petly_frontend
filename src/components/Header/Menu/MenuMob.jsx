import { AuthNav } from '../Navigation/AuthNav';
import { Nav } from '../Navigation/Nav';
import { UserNav } from '../Navigation/UserNav';
import { AnimatePresence, useCycle } from 'framer-motion';
import { useRef } from 'react';
import { useDimensions } from '../../../helpers/useDimensions';
import { MenuToggle } from './MenuToggle';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { MotionBackDrop, MotionBkg, MotionNav, MotionUl } from './Menu.styled';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      height * 2 + 200
    }px at calc(100% - 20px) calc(0% + 20px))`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at calc(100% - 20px) calc(0% + 20px))',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MenuMob = ({ size }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const onClose = e => {
    if (e.target.nodeName !== 'A') {
      return;
    }
    toggleOpen();
  };

  return (
    <>
      <MotionNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        {size > 768 && (
          <>
            <Box as="ul" pr={'62px'}>
              {isLoggedIn && <UserNav variants={'variants.open'} />}
              <li>
                {!isLoggedIn && (
                  <AuthNav
                    display="flex"
                    gridGap={[6]}
                    variants={'variants.open'}
                  />
                )}
              </li>
            </Box>
          </>
        )}
        <MotionBkg variants={sidebar} />
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <MotionUl
                variants={variants}
                initial={'closed'}
                animate={isOpen ? 'open' : 'closed'}
                exit={'closed'}
                key="list"
                onClick={onClose}
              >
                {size < 768 && (
                  <>
                    {isLoggedIn && <UserNav />}
                    <li>
                      {!isLoggedIn && <AuthNav display="flex" gridGap={[6]} />}
                    </li>
                  </>
                )}
                <li>
                  <Nav
                    display="flex"
                    flexDirection="column"
                    gridGap={[15]}
                    alignItems="center"
                  />
                </li>
              </MotionUl>
              {size > 899.5 && (
                <MotionBackDrop
                  variants={sidebar}
                  initial={'closed'}
                  animate={isOpen ? 'open' : 'closed'}
                  exit={'closed'}
                  key="backdrop"
                  onClick={toggleOpen}
                />
              )}
            </>
          )}
        </AnimatePresence>
        <MenuToggle toggle={() => toggleOpen()} />
      </MotionNav>
    </>
  );
};
