import { FilledBtn, OutlineBtn, OutlineSm } from './Button.styled';

export const Button = ({ variant, ...props }) => {
  return (
    <>
      {variant === 'filled' && <FilledBtn {...props} />}
      {variant === 'outline' && <OutlineBtn {...props} />}
      {variant === 'outline-sm' && <OutlineSm {...props} />}
    </>
  );
};
