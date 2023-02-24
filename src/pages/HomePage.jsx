import { Box } from 'components/Box';
import Bg from '../images/home/Bg.svg';
import DesktopBg from '../images/home/desktop/DesktopBg.svg';
import Heart from '../images/home/desktop/Heart.svg';
import ReactLog from '../images/home/home-x1.png';
import ReactLog2 from '../images/home/home-x2.png';
import ReactLog3 from '../images/home/home-x3.png';
import useWindowDimensions from 'helpers/useWindowDimensions';
import {
  BgImg,
  HeartImg,
  PetImg,
  Section,
  Title,
  Wrap,
} from 'components/Home/HomePage.styled';

export const HomePage = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {/* <main> */}
      <Section>
        <picture>
          <source srcSet={`${DesktopBg}`} media="(min-width: 1280px)" />
          <BgImg src={Bg} alt="background image" />
        </picture>
        <Wrap>
          <Title>Take good care of your small pets</Title>
          <Box position="relative">
            {width >= 1280 && <HeartImg src={Heart} alt="heart image" />}
            <PetImg
              srcSet={`${ReactLog} 1x, ${ReactLog2} 2x, ${ReactLog3} 3x`}
              src={ReactLog}
              alt="pet image"
            />
          </Box>
        </Wrap>
      </Section>
      {/* </main> */}
    </>
  );
};
