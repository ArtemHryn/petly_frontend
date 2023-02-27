import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { NoticePetCard } from '../NoticesPetCard/NoticesPetCard';
import { CardList, PaginationList } from './NoticesCategoryList.styled';
import { fetchNotices } from 'redux/notices/notices-operations';
import {
  getNoticeIsLoading,
  getNotices,
  getPage,
  getSearch,
  getTotalPages,
} from 'redux/notices/noticesSelectors';
import { changeCategory, changePage } from 'redux/notices/searchSlice';
import { getFavorites, getIsLoggedIn } from 'redux/auth/authSelector';
import { ListLoader } from 'components/common/ListLoader/ListLoader';
import { useState } from 'react';
import { NoAnimals } from 'components/User/NoAnimals/NoAnimals';

export const NoticeCategoryList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const notices = useSelector(getNotices);
  const search = useSelector(getSearch);
  const favorites = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getNoticeIsLoading);
  const page = useSelector(getPage);
  const totalPages = useSelector(getTotalPages);

  const [isAvailablePagination, setIsAvailablePagination] = useState(true);

  const filteredNotices = notices.map(notice => {
    if (isLoggedIn && favorites.includes(notice._id)) {
      return { ...notice, isFavorite: true };
    }
    return { ...notice, isFavorite: false };
  });

  const onPageChange = (e, page) => {
    dispatch(changePage(page));
  };

  useEffect(() => {
    const controller = new AbortController();
    setIsAvailablePagination(categoryName !== 'own' && categoryName !== 'favorite')
    dispatch(changeCategory(categoryName));
    dispatch(
      fetchNotices({
        category: categoryName,
        search,
        page,
        signal: controller.signal,
      })
    );
    return () => controller.abort();
  }, [categoryName, dispatch, search, page]);

  if (notices.length === 0) {
    return (<NoAnimals> Sorry, there are no Notices</NoAnimals>)
  }
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
        {isAvailablePagination && (
          <PaginationList
            count={totalPages}
            boundaryCount={0}
            variant="outlined"
            shape="rounded"
            siblingCount={1}
            page={page}
            onChange={onPageChange}
          />
        )}
      </>
    );
};
