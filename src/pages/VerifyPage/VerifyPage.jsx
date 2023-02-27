import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { Container } from 'components/Container/Container';
import { verifyUser } from 'redux/auth/auth-operations';
import backgroundMobile from 'images/registration/waves_mobile.png';
import backgroundTablet from 'images/registration/waves_tablet.png';
import backgroundDesktop from 'images/registration/waves_desktop.png';
import { Title } from 'components/Title/Title';
import { getUserError, getIsVerified } from 'redux/auth/authSelector';
import { toastSuccess } from 'helpers/toast-notifications/toasts-notifications';

export const VerifyPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVerified = useSelector(getIsVerified);
  const error = useSelector(getUserError);

  useEffect(() => {
    if (isVerified) {
      toastSuccess('Verification is success, redirect to login');
      toast.onChange(async payload => {
        if (payload.status === 'removed') {
          navigate('/login');
        }
      });
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
      {error && (
        <Title backgroundColor="hightAccent" p="10" borderRadius="sm">
          {error}
        </Title>
      )}
      <ToastContainer />
    </Container>
  );
};
