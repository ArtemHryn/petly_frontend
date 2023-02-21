import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { Label, SearchInput, SearchBtnContainer, Button } from './NewsSearch.styled';
import { fetchNews } from 'redux/news/news-operations';
import { selectFilter } from 'redux/news/news-selectors';
import { setNewsFilter } from 'redux/news/newsFilterSlice';

export const NewsSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectFilter);
    const [searchQuery, setSearchQuery] = useState(() => search);

    const onInputSearch = () => {
    dispatch(setNewsFilter(searchQuery));
    dispatch(
      fetchNews({
        search,
      })
    );
    };
    
    const onPressEnter = (event) => {
    if (event.key === 'Enter') {
      onInputSearch();
    }
        return;
    } 
   
    return (
        <Label>
            <SearchInput
                type="text"
                placeholder="Search"
                autoComplete="off"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                onKeyDown={onPressEnter}
            />
            <SearchBtnContainer>
                <Button
                    type="button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={onInputSearch}
                >
                    <AiOutlineSearch style={{ width: '24px', height: '24px' }} />
                </Button>
            </SearchBtnContainer>
        </Label>
    );
}