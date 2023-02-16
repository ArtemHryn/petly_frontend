import { H1, H2 } from './Title.styled';

export const Title = ({ variant, children, ...props }) => {
  return (
    <>
      {variant === 'h1' && <H1 {...props}>{children}</H1>}
      {variant === 'h2' && <H2 {...props}>{children}</H2>}
    </>
  );
};
