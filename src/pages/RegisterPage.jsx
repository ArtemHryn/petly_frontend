import { useState } from 'react';
import { RegisterForm } from 'components/RegisterForm';
import backgroundMobile from 'images/registration/waves_mobile.png';
import backgroundTablet from 'images/registration/waves_tablet.png';
import backgroundDesktop from 'images/registration/waves_desktop.png';
import { Container } from 'components/Container/Container';

export const RegisterPage = () => {
  const [isTheSecondStep, setIsTheSecondStep] = useState(false);
  return (
    <Container
      backgroundImage={[
        `url('${backgroundMobile}')`,
        `url('${backgroundTablet}')`,
        `url('${backgroundDesktop}')`,
      ]}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition={[
        isTheSecondStep ? 'bottom -11% right 50%' : 'bottom',
        'bottom',
      ]}
      pt={[16, '170px', '46px']}
      pb={[
        isTheSecondStep ? '59px' : 22,
        isTheSecondStep ? '223px' : '270px',
        isTheSecondStep ? '51px' : '113px',
      ]}
      // height={['calc(100vh - 54px)', 'calc(100vh - 71px)', '100%']}
    >
      <RegisterForm
        isTheSecondStep={isTheSecondStep}
        setIsTheSecondStep={p => setIsTheSecondStep(p)}
      />
    </Container>
  );
};
