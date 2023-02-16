import { useForm } from 'react-hook-form';
import { AuthRedirectionLink } from './AuthRedirectionLink';
import { Form, Input, Button } from './RegisterForm.styled';
import { Title } from 'components/Title/Title';

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
      <Title
        fontSize={['24px', '36px']}
        fontWeight={['700', '500']}
        lineHeight={['1.38', '1.36']}
        marginBottom="15"
      >
        Registration
      </Title>
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
