import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
import { ScrollToTop } from './ScrollToTop';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NoticeCategoryList } from './Notices/NoticesCategoryList/NoticesCategoryList';
// import { AnimatePresence } from 'framer-motion';
// import { RestrictedRoute } from 'helpers/PublicRoute';
// import { PrivateRoute } from 'helpers/PrivateRoute';

const HomePage = lazy(() =>
  import('../pages/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const NoticesPage = lazy(() =>
  import('../pages/FindPet/NoticesPage').then(module => ({
    default: module.NoticesPage,
  }))
);

const NewsPage = lazy(() =>
  import('../pages/NewsPage').then(module => ({
    default: module.NewsPage,
  }))
);

const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage').then(module => ({
    default: module.OurFriendsPage,
  }))
);

const LoginPage = lazy(() =>
  import('../pages/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage').then(module => ({
    default: module.RegisterPage,
  }))
);

const UserPage = lazy(() =>
  import('../pages/UserPage').then(module => ({
    default: module.UserPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  }))
);

export const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <SharedLayout />

      {/* <AnimatePresence mode="wait"> */}
      <Routes key={location.pathname} location={location}>
        <Route path="/">
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="sell" />}></Route>
            <Route path=":categoryName" element={<NoticeCategoryList/> } />
          </Route>
          <Route path="news" element={<NewsPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route
            path="login"
            element={<LoginPage />}
            // element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />
          <Route
            path="register"
            element={<RegisterPage />}
            // element={
            //   <RestrictedRoute redirectTo="/" component={<Register />} />
            // }
          />
          <Route
            path="user"
            element={<UserPage />}
            // element={
            //   <PrivateRoute redirectTo="/login" component={<Profile />} />
            // }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
};
