import styled from 'styled-components';
import { space, flexbox } from 'styled-system';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding-left: ${({ theme }) => theme.space[9]}px;
  padding-right: ${({ theme }) => theme.space[9]}px;

  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}) {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.regular};

    padding-top: 60px;
    padding-bottom: ${({ theme }) => theme.space[15]}px;
    padding-left: 60px;
    padding-right: 60px;
    border-radius: ${({ theme }) => theme.radii.lg};
    max-width: 608px;
    width: 100%;
    min-height: 517px;
    margin: 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.desktop}) {
    padding-bottom: 60px;
    padding-left: 80px;
    padding-right: 80px;
  }
  ${space}
  ${flexbox}
`;

export const Input = styled.input`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.mobile[5]};
  line-height: ${({ theme }) => theme.lineHeights.mobile[1]};
  letter-spacing: 0.04em;

  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: ${({ name, theme }) =>
    name === 'password' || name === 'confirmedPassword' ? 0 : theme.space[8]}px;
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[6]}px;
  padding-left: ${({ theme }) => theme.space[8]}px;
  padding-right: ${({ theme }) => theme.space[8]}px;

  transition: border-color 0.3s cubic-bezier(0.5, 0.1, 0.2, 1);
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.inputAccent};
    box-shadow: ${({ theme }) => theme.shadows.inputFocus};
    transition: ${({ theme }) => theme.animations.input};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.inputAccent};
  }
  &:nth-of-type(3) {
    margin-bottom: ${({ name, theme }) =>
      name === 'phone' ? theme.space[11] : theme.space[15]}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}) {
    line-height: ${({ theme }) => theme.lineHeights.tablet[4]};
    padding-top: ${({ theme }) => theme.space[7]}px;
    padding-bottom: ${({ theme }) => theme.space[7]}px;
    padding-left: ${({ theme }) => theme.space[12]}px;
    padding-right: ${({ theme }) => theme.space[12]}px;

    background-color: ${({ theme }) => theme.colors.sectionBG};
  }
  ${space}
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.mobile[5]};
  line-height: ${({ theme }) => theme.lineHeights.mobile[1]};
  letter-spacing: 0.04em;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ children, theme, disabled }) => {
    if (disabled) {
      return '#f9a88c';
    }
    return children === 'Back' ? 'transparent' : theme.colors.accent;
  }};
  color: ${({ children, theme }) =>
    children === 'Back' ? theme.colors.black : theme.colors.white};
  border-width: ${({ theme }) => theme.space[1]}px;
  border-color: ${({ children, theme }) =>
    children === 'Back' ? theme.colors.accent : 'transparent'};
  border-radius: ${({ theme }) => theme.radii.lg};

  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
  padding-left: ${({ theme }) => theme.space[16]}px;
  padding-right: ${({ theme }) => theme.space[16]}px;
  margin-bottom: ${({ theme }) => theme.space[15]}px;

  transition: ${({ theme }) => theme.animations.button};

  &:hover,
  &:focus {
    background-color: ${({ theme, disabled, children }) =>
      !disabled && children !== 'Back' && theme.colors.hightAccent};

    border-color: ${({ theme, children }) =>
      children === 'Back' && theme.colors.hightAccent};
  }

  ${space};
`;

export const ErrorMsg = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.mobile[2]};
  color: ${({ theme }) => theme.colors.red};

  margin-bottom: ${({ theme }) => theme.space[7]}px;

  ${space}
`;

export const ShowPasswordButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.animations.showPasswordBtn};

  &:hover {
    color: rgba(17, 17, 17, 1);
  }
`;

export const ResendVerificationButton = styled.button`
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.blue};
  border-color: transparent;

  background: linear-gradient(to right, #ff6101, #f59256),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 2px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover,
  &:focus {
    background-size: 0 2px, 100% 2px;
  }
`;
