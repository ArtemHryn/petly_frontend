import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { NoticePetCard } from '../NoticesPetCard/NoticesPetCard';
import { CardList, PaginationList } from './NoticesCategoryList.styled';
import { fetchNotices } from 'redux/notices/notices-operations';
import {
  getNoticeIsLoading,
  getNotices,
  getSearch,
  getTotalPages,
} from 'redux/notices/noticesSelectors';
import { changeCategory } from 'redux/notices/searchSlice';
import { getFavorites, getIsLoggedIn } from 'redux/auth/authSelector';
import { ListLoader } from 'components/common/ListLoader/ListLoader';
import { useState } from 'react';
import { NoAnimals } from 'components/User/NoAnimals/NoAnimals';

export const NoticeCategoryList = () => {
  const { categoryName } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const notices = useSelector(getNotices);
  const search = useSelector(getSearch);
  const favorites = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getNoticeIsLoading);
  const totalPages = useSelector(getTotalPages);
  const [searchParams, setSearchParams] = useSearchParams();
  const filteredPage = searchParams.get('page') ?? 1;

  const [isAvailablePagination, setIsAvailablePagination] = useState(true);

  const categoryForFilter =
    categoryName === 'for-free' ? 'in-good-hands' : categoryName;
  const correctNotices = notices.filter(notice => {
    if (!isAvailablePagination) {
      return notice;
    }
    return categoryForFilter === notice.category;
  });

  const filteredNotices = correctNotices.map(notice => {
    if (isLoggedIn && favorites.includes(notice._id)) {
      return { ...notice, isFavorite: true };
    }
    return { ...notice, isFavorite: false };
  });

  const onPageChange = (e, page) => {
    setPage(page);
    setSearchParams({ page });
  };

  useEffect(() => {
    setSearchParams( filteredPage ? {page: filteredPage} : {page}  );
    const controller = new AbortController();
    setIsAvailablePagination(
      categoryName !== 'own' && categoryName !== 'favorite'
    );
    dispatch(changeCategory(categoryName));
    dispatch(
      fetchNotices({
        category: categoryName,
        search,
        page: filteredPage ? filteredPage : page,
        signal: controller.signal,
      })
    );
    return () => controller.abort();
  }, [categoryName, dispatch, search, page, setSearchParams, filteredPage]);

  if (isLoading) {
    return <ListLoader />;
  }

  if (filteredNotices.length === 0) {
    return <NoAnimals> Sorry, there are no Notices</NoAnimals>;
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
          page={filteredPage ? parseInt(filteredPage) : page}
          onChange={onPageChange}
        />
      )}
    </>
  );
};
