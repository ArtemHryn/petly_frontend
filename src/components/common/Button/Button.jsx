import { FilledBtn, OutlineBtn, OutlineSm } from './Button.styled';

export const Button = ({ variant, children, ...props }) => {
  return (
    <>
      {variant === 'filled' && <FilledBtn {...props}>{children}</FilledBtn>}
      {variant === 'outline' && <OutlineBtn {...props}>{children}</OutlineBtn>}
      {variant === 'outline-sm' && <OutlineSm {...props} >{children}</OutlineSm>}
    </>
  );
};
