import { Header } from 'components/Header/Header';
import { MainLoader } from 'components/Loader/MainLoader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<MainLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
