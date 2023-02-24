import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'components/Container/Container';
import { verifyUser } from 'redux/auth/auth-operations';
import backgroundMobile from 'images/registration/waves_mobile.png';
import backgroundTablet from 'images/registration/waves_tablet.png';
import backgroundDesktop from 'images/registration/waves_desktop.png';
import { Title } from 'components/Title/Title';
import { getUserError, getIsVerified } from 'redux/auth/authSelector';
import { AnimatedBox } from './VerifyPage.styled';

export const VerifyPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVerified = useSelector(getIsVerified);
  const error = useSelector(getUserError);

  useEffect(() => {
    if (isVerified) {
      navigate('/login');
    }
    const verify = async () => {
      await dispatch(verifyUser(token));
    };

    verify();
  }, [dispatch, isVerified, navigate, token]);

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
      pt={[16, '170px', '46px']}
      pb="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <AnimatedBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        backgroundColor="hightAccent"
        p="10"
        borderRadius="sm"
      >
        <Title>
          {(isVerified && 'Success, redirect to Login page') || error}
        </Title>
      </AnimatedBox>
    </Container>
  );
};
