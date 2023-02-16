import { useForm } from 'react-hook-form';
import { AuthRedirectionLink } from './AuthRedirectionLink';
import { Form, Input, Button } from './RegisterForm.styled';
import { Title } from 'components/Title/Title';

//  font-weight: ${({ theme }) => theme.fontWeights.regular};
//     font-size: ${({ theme }) => theme.fontSizes[9]};
//     line-height: ${({ theme }) => theme.lineHeights[2]};

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
      <Title style={{ marginBottom: 40 }} fontSize={[36]}>
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
