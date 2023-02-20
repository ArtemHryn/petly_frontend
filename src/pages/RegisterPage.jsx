import { RegisterForm } from 'components/RegisterForm';
import backgroundMobile from 'images/registration/waves_mobile.png';
import backgroundTablet from 'images/registration/waves_tablet.png';
import backgroundDesktop from 'images/registration/waves_desktop.png';
import { Container } from 'components/Container/Container';

export const RegisterPage = () => {
  return (
    <Container
      backgroundImage={[
        `url('${backgroundMobile}')`,
        `url('${backgroundTablet}')`,
        `url('${backgroundDesktop}')`,
      ]}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      position="relative"
    >
      <RegisterForm />
    </Container>
  );
};
