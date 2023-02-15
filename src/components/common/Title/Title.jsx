import { H1, H2 } from './Title.styled';

export const Title = props => {
  return (
    <>
      {props.variant === 'h1' && <H1 {...props} />}
      {props.variant === 'h2' && <H2 {...props} />}
    </>
  );
};
