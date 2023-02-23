import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoticePetCard } from '../NoticesPetCard/NoticesPetCard';
import { CardList } from './NoticesCategoryList.styled';
import { fetchNotices } from 'redux/notices/notices-operations';
import {
  getNoticeIsLoading,
  getNotices,
  getSearch,
} from 'redux/notices/noticesSelectors';
import { changeCategory } from 'redux/notices/searchSlice';
import { getFavorites, getIsLoggedIn } from 'redux/auth/authSelector';
import { ListLoader } from 'components/common/ListLoader/ListLoader';
import { ToastContainer } from 'react-toastify';

export const NoticeCategoryList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const notices = useSelector(getNotices);
  const search = useSelector(getSearch);
  const favorites = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getNoticeIsLoading);

  const filteredNotices = notices.map(notice => {
    if (isLoggedIn && favorites.includes(notice._id)) {
      return { ...notice, isFavorite: true };
    }
    return { ...notice, isFavorite: false };
  });

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

  return isLoading ? (
    <ListLoader />
  ) : (
    <>
      {' '}
      <ToastContainer />
      <CardList
        initial={{
          y: -70,
          opacity: 0.3,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            type: 'cubic-bezier(.49,.99,.82,.98)',
            delayChildren: 0.5,
          },
        }}
      >
        {filteredNotices.map(item => (
          <NoticePetCard key={item._id} item={item} />
        ))}
      </CardList>
    </>
  );
};
