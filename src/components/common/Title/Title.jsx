import { H1, H2 } from './Title.styled';

export const Title = ({ variant, ...props }) => {
  return (
    <>
      {variant === 'h1' && <H1 {...props} />}
      {variant === 'h2' && <H2 {...props} />}
    </>
  );
};
