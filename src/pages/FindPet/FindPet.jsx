import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ButtonContainer, ButtonElement, ButtonList, FilterButton, Input, Label, SearchButton } from './Findpet.styled';

export const filterButtons = [
  { title: 'lost/found' },
  { title: 'in good hands' },
  { title: 'sell' },
  { title: 'favorite ads' },
  { title: 'my ads' },
];

export const FindPet = () => {
  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <Label>
        <Input placeholder="Search" />
        <ButtonContainer>
          <SearchButton
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <AiOutlineSearch style={{ fontSize: '26px' }} />
          </SearchButton>
        </ButtonContainer>
      </Label>
      <ButtonList>
        {filterButtons.map(({ title }) => (
          <ButtonElement key={title}>
            <FilterButton>{title}</FilterButton>
          </ButtonElement>
        ))}
      </ButtonList>
    </Container>
  );
};
