import { useState } from 'react';

import { RegisterForm } from 'components/RegisterForm';
import { ResendEmailForm } from 'components/ResendEmailForm/ResendEmailForm';
import backgroundMobile from 'images/registration/waves_mobile.png';
import backgroundTablet from 'images/registration/waves_tablet.png';
import backgroundDesktop from 'images/registration/waves_desktop.png';
import { Container } from 'components/Container/Container';

export const RegisterPage = () => {
  const [isTheSecondStep, setIsTheSecondStep] = useState(false);
  const [isResendVerificationActive, setIsResendVereficationActive] =
    useState(false);
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
        isTheSecondStep ? 'bottom -27% right 50%' : 'bottom -15% right 50%',
        'bottom',
        'bottom',
      ]}
      pt={[16, '170px', '46px']}
      pb="0"
    >
      {!isResendVerificationActive ? (
        <RegisterForm
          isTheSecondStep={isTheSecondStep}
          setIsTheSecondStep={p => setIsTheSecondStep(p)}
          setIsResendVereficationActive={p => setIsResendVereficationActive(p)}
        />
      ) : (
        <ResendEmailForm
          setIsResendVereficationActive={p => setIsResendVereficationActive(p)}
        />
      )}
    </Container>
  );
};
