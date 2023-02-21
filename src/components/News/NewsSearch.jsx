import { AiOutlineSearch } from 'react-icons/ai';
import { Label, SearchInput, SearchBtnContainer, Button } from './NewsSearch.styled';

export const NewsSearch = () => {
   
    return (
        <Label>
            <SearchInput
                type="text"
                placeholder="Search"
                autoComplete="off"
            />
            <SearchBtnContainer>
                <Button
                    type="button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <AiOutlineSearch style={{ width: '24px', height: '24px' }} />
                </Button>
            </SearchBtnContainer>
        </Label>
    );
}