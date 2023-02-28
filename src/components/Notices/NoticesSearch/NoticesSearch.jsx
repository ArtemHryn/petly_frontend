import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchNotices } from 'redux/notices/notices-operations';
import { getCategory, getSearch } from 'redux/notices/noticesSelectors';
import { changeSearch } from 'redux/notices/searchSlice';

import {
  ButtonContainer,
  ClearButton,
  ClearIcon,
  Input,
  Label,
  SearchButton,
} from './NoticesSearch.styled';

export const NoticeSearch = () => {
  const search = useSelector(getSearch);
  const [searchValue, setSearchValue] = useState(() => search);
  const category = useSelector(getCategory);
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const onSearch = () => {
    setSearchParams({ page: 1 });

    dispatch(changeSearch(searchValue));
    dispatch(
      fetchNotices({
        category,
        search: searchValue,
      })
    );
  };

  const onCleanUp = () => {
    setSearchParams({ page: 1 });
    setSearchValue('');
    dispatch(changeSearch(''));
    dispatch(
      fetchNotices({
        category,
        search: '',
      })
    );
  };

  const onPressEnter = e => {
    if (e.key === 'Enter') {
      onSearch();
    }
    return;
  };

  return (
    <Label>
      <Input
        placeholder="Search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={onPressEnter}
      />
      <ButtonContainer>
        {searchValue !== '' && (
          <ClearButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={onCleanUp}
          >
            <ClearIcon />
          </ClearButton>
        )}
        <SearchButton
          type="button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={onSearch}
        >
          <AiOutlineSearch style={{ fontSize: '26px' }} />
        </SearchButton>
      </ButtonContainer>
    </Label>
  );
};
