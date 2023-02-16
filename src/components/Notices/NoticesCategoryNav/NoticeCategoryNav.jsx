import { Box } from 'components/Box';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  AddPetButton,
  AddPetText,
  ButtonElement,
  ButtonList,
  FilterButton,
} from './NoticeCategoryNav.styled';

export const filterButtons = [
  { title: 'lost/found', to: 'lost-found' },
  { title: 'in good hands', to: 'for-free' },
  { title: 'sell', to: 'sell' },
  { title: 'favorite ads', to: 'favorite' },
  { title: 'my ads', to: 'own' },
];

export const NoticeCategoryNav = () => {
  return (
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
  );
};
