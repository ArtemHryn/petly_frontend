import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
import { ScrollToTop } from './ScrollToTop';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NoticeCategoryList } from './Notices/NoticesCategoryList/NoticesCategoryList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from 'redux/auth/auth-operations';
import { getRefreshing } from 'redux/auth/authSelector';

// import { AnimatePresence } from 'framer-motion';
import { RestrictedRoute } from 'helpers/PublicRoute';
import { PrivateRoute } from 'helpers/PrivateRoute';

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
  import('../pages/NewsPage/NewsPage').then(module => ({
    default: module.NewsPage,
  }))
);

const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage').then(module => ({
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
  import('../pages/UserPage/UserPage').then(module => ({
    default: module.UserPage,
  }))
);

const VerifyPage = lazy(() =>
  import('../pages/VerifyPage').then(module => ({
    default: module.VerifyPage,
  }))
);
const RestorePasswordPage = lazy(() =>
  import('../pages/RestorePasswordPage').then(module => ({
    default: module.RestorePasswordPage,
  }))
);
const ForgotPasswordPage = lazy(() =>
  import('../pages/ForgotPasswordPage').then(module => ({
    default: module.ForgotPasswordPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  }))
);

export const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const isRefreshing = useSelector(getRefreshing);
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />

      {/* <AnimatePresence mode="wait"> */}
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route index element={<Navigate replace to="sell" />} />
            <Route path=":categoryName" element={<NoticeCategoryList />} />
          </Route>
          <Route path="news" element={<NewsPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="verify/:token"
            element={
              <RestrictedRoute redirectTo="/" component={<VerifyPage />} />
            }
          />
          <Route
            path="restore-password/:token"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RestorePasswordPage />}
              />
            }
          />
          <Route
            path="forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<ForgotPasswordPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
};
