import { Head } from './Header.styled';
import { Logo } from './Logo';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <Head
        display="flex"
        px={[9, 12, 8]}
        pt={[8, 10, 9]}
        zIndex="1"
        gridGap={[null, null, '80px']}
        bg="sectionBG"
      >
        <Logo />
        <Navigation />
      </Head>
    </>
  );
};
