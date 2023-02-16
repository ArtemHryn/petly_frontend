import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { Container } from 'components/Container/Container';
import {
  AddPetButton,
  AddPetText,
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
import { Box } from 'components/Box';

export const filterButtons = [
  { title: 'lost/found', to: '#' },
  { title: 'in good hands', to: '#' },
  { title: 'sell', to: '#' },
  { title: 'favorite ads', to: '#' },
  { title: 'my ads', to: '#' },
];

export const NoticesPage = () => {
  return (
    <Container>
      <Title mb={[11]} fontSize={['24px', '48px']}>
        Find your favorite pet
      </Title>

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
      <Box
        display={[null, 'flex']}
        alignItems="flex-start"
        justifyContent="space-between"
        mb={['30px', '60px']}
      >
        <ButtonList>
          {filterButtons.map(({ title, to }) => (
            <ButtonElement key={title}>
              <FilterButton to={to}>{title}</FilterButton>
            </ButtonElement>
          ))}
        </ButtonList>
        <Box display={['none', 'flex']} alignItems="center">
          <AddPetText>Add pet</AddPetText>
          <AddPetButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            type="button"
            display={[null, 'flex']}
            position={['static']}
            width={[null, '44px']}
            height={[null, '44px']}
          >
            <AiOutlinePlus style={{ color: '#FFFFFF', fontSize: '26px' }} />
          </AddPetButton>
        </Box>
      </Box>
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
