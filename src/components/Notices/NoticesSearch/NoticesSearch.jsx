import { AiOutlineSearch } from 'react-icons/ai';

import {
  ButtonContainer,
  Input,
  Label,
  SearchButton,
} from './NoticesSearch.styled';

export const NoticeSearch = () => {
  return (
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
  );
};
