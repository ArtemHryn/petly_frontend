import { NoPetsText, NoUserPetsBox } from 'pages/UserPage/UserPage.styled';

export const NoAnimals = ({ children }) => {
  return (
    <NoUserPetsBox>
      <NoPetsText>{children}</NoPetsText>
    </NoUserPetsBox>
  );
};
