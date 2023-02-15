import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
