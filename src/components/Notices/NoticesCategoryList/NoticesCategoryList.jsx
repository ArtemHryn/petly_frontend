import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoticePetCard } from '../NoticesPetCard/NoticesPetCard';
import { CardItem, CardList } from './NoticesCategoryList.styled';
import { fetchNotices } from 'redux/notices/notices-operations';
import { getNotices, getSearch } from 'redux/notices/noticesSelectors';
import { changeCategory } from 'redux/notices/searchSlice';

export const filterButtons = [
  { title: 'lost/found', to: 'lost-found' },
  { title: 'in good hands', to: 'for-free' },
  { title: 'sell', to: 'sell' },
  { title: 'favorite ads', to: 'favorite' },
  { title: 'my ads', to: 'own' },
];

export const NoticeCategoryList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const notices = useSelector(getNotices);
  const search = useSelector(getSearch);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(changeCategory(categoryName));
    dispatch(
      fetchNotices({
        category: categoryName,
        search,
        signal: controller.signal,
      })
    );
    return () => controller.abort();
  }, [categoryName, dispatch, search]);
console.log(notices);
  return (
    <CardList>
      {notices.map(item => (
        <CardItem key={item._id}>
          <NoticePetCard item={item} />
        </CardItem>
      ))}
    </CardList>
  );
};
