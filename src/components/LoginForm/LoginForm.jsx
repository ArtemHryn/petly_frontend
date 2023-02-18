import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLink } from './AuthLink';
import { Form, Input, LoginBtn } from './LoginForm.styled';
import { Title } from 'components/Title/Title';
import { logIn as loginUser } from 'redux/login-auth/loginAuth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = async ({ email, password }) => {
    await dispatch(loginUser({ email, password }));
  };
  const [formValues] = useState({
    email: '',
    password: '',
  });

  const { register, handleSubmit } = useForm({
    formValues,
    mode: 'all',
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        {...register('email', { required: true })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      <LoginBtn type="submit">Login</LoginBtn>
      <AuthLink
        path="/register"
        text="Don't have an account?"
        linkText="Register"
      />
    </Form>
  );
};
