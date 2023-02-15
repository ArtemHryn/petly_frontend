import { useForm } from 'react-hook-form';
import { AuthRedirectionLink } from 'components/AuthRedirectionLink/AuthRedirectionLink';
import { Form, Input, Button } from './RegisterForm.styled';
import { RegisterTitle } from 'components/RegisterTitle/RegisterTitle';

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      city: '',
      phone: '',
    },
  });
  return (
    <Form onSubmit={handleSubmit(console.log)}>
      <RegisterTitle>Registration</RegisterTitle>
      <Input
        type="text"
        {...register('email', { required: true })}
        placeholder="Email"
      />
      <Input
        type="text"
        {...register('password', { required: true })}
        placeholder="Password"
      />
      <Input type="text" placeholder="Confirm password" />
      <Button type="button">Next</Button>
      <AuthRedirectionLink
        path="/login"
        text="Already have account?"
        linkText="Login"
      />
    </Form>
  );
};
