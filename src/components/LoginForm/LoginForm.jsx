import { useForm } from 'react-hook-form';
import { AuthLink } from './AuthLink';
import { Form, Input, LoginBtn } from './LoginForm.styled';
import { Title } from 'components/Title/Title';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Form onSubmit={handleSubmit(console.log)}>
      <Title
        marginBottom="40"
        fontSize={['24px', '36px']}
        fontWeight={['700', '500']}
        lineHeight={['1.38', '1.36']}
      >
        Login
      </Title>
      <Input type="text" placeholder="Email" {...register('email')} />
      <Input type="text" placeholder="Password" {...register('password')} />
      <LoginBtn type="submit">Login</LoginBtn>
      <AuthLink
        path="/register"
        text="Don't have an account?"
        linkText="Register"
      />
    </Form>
  );
};