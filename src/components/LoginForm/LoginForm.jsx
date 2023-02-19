import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLink } from './AuthLink';
import { Error, Form, Input, LoginBtn } from './LoginForm.styled';
import { Title } from 'components/Title/Title';
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));
  };
  const [formValues] = useState({
    email: '',
    password: '',
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
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
          required: { value: true, message: 'Email is requried' },
        })}
      />
      {errors.email?.message && <Error>{errors.email.message}</Error>}
      <Input
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
        mb={['15']}
      />
      {errors.password?.message && <Error>{errors.password.message}</Error>}

      <LoginBtn type="submit">Login</LoginBtn>
      <AuthLink
        path="/register"
        text="Don't have an account?"
        linkText="Register"
      />
    </Form>
  );
};
