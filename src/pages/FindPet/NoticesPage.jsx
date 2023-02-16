import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { Container } from 'components/Container/Container';
import {
  AddPetButton,
  ButtonContainer,
  ButtonElement,
  ButtonList,
  CardItem,
  CardList,
  FilterButton,
  Input,
  Label,
  SearchButton,
} from './Findpet.styled';
import { Title } from 'components/Title/Title';
import { FindPetCard } from 'components/FindPet/FindPetCard/FindPetCard';

export const filterButtons = [
  { title: 'lost/found' },
  { title: 'in good hands' },
  { title: 'sell' },
  { title: 'favorite ads' },
  { title: 'my ads' },
];

export const NoticesPage = () => {
  return (
    <Container>
      <Title mb={[11]}>Find your favorite pet</Title>

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
      <CardList>
        {filterButtons.map(item => (
          <CardItem key={item.title}>
            <FindPetCard title={item.title}></FindPetCard>
          </CardItem>
        ))}
      </CardList>

      <AddPetButton
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        type="button"
      >
        <AiOutlinePlus style={{ color: '#FFFFFF', fontSize: '26px' }} />
        Add pet
      </AddPetButton>
    </Container>
  );
};
