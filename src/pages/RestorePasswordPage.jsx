import { ResetPasswordForm } from 'components/ResetPasswordForm';
import backgroundMobile from 'images/registration/waves_mobile.png';
import backgroundTablet from 'images/registration/waves_tablet.png';
import backgroundDesktop from 'images/registration/waves_desktop.png';

import { Container } from 'components/Container/Container';

export const RestorePasswordPage = () => {
  return (
    <Container
      backgroundImage={[
        `url('${backgroundMobile}')`,
        `url('${backgroundTablet}')`,
        `url('${backgroundDesktop}')`,
      ]}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition={['bottom -11% right 50%', 'bottom']}
    >
      <ResetPasswordForm />
    </Container>
  );
};
