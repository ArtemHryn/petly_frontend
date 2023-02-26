import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLink } from './AuthLink';
import { Error, Form, Input, LoginBtn, Text, Link } from './LoginForm.styled';
import { Title } from 'components/Title/Title';
import { logIn } from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import { toastError } from 'helpers/toast-notifications/toasts-notifications';
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = async ({ email, password }) => {
    const response = await dispatch(logIn({ email, password }));
    if (response.payload === 'Request failed with status code 401') {
      toastError('email or password is wrong');
      return;
    }
  };

  const [formValues] = useState({
    email: '',
    password: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formValues,
    mode: 'all',
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Title
        fontSize={['24px', '36px']}
        fontWeight={['700', '500']}
        lineHeight={['1.38', '1.36']}
        marginBottom="15"
      >
        Login
      </Title>
      <Input
        type="text"
        placeholder="Email"
        {...register('email', {
          required: 'Please,enter your email',
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'Please, enter valid email',
          },
        })}
      />
      {errors.email?.message && <Error>{errors.email.message}</Error>}
      <Input
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'Please, enter your password',
          minLength: { value: 7, message: 'Min-length is 7' },
          maxLength: {
            value: 32,
            message: 'Max-length is 32',
          },
        })}
        mb={['15']}
      />
      {errors.password?.message && (
        <Error mt={'-25px'}>{errors.password.message}</Error>
      )}

      <LoginBtn type="submit">Login</LoginBtn>
      <Text>
        Forgot your password? <Link to={'/forgot-password'}>Reset</Link>
      </Text>
      <AuthLink
        path="/register"
        text="Don't have an account?"
        linkText="Register"
      />

      <ToastContainer />
    </Form>
  );
};
