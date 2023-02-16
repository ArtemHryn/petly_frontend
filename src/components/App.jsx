import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
import { ScrollToTop } from './ScrollToTop';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { AnimatePresence } from 'framer-motion';
// import { RestrictedRoute } from 'helpers/PublicRoute';
// import { PrivateRoute } from 'helpers/PrivateRoute';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({
    default: module.Home,
  }))
);

const FindPet = lazy(() =>
  import('../pages/FindPet/FindPet').then(module => ({
    default: module.FindPet,
  }))
);

// 'pages/FindPet'

const News = lazy(() =>
  import('../pages/News/News').then(module => ({
    default: module.News,
  }))
);

const OurFriend = lazy(() =>
  import('../pages/OurFriend').then(module => ({
    default: module.OurFriend,
  }))
);

const Login = lazy(() =>
  import('../pages/Login').then(module => ({
    default: module.Login,
  }))
);

const Register = lazy(() =>
  import('../pages/Register').then(module => ({
    default: module.Register,
  }))
);

const Profile = lazy(() =>
  import('../pages/Profile').then(module => ({
    default: module.Profile,
  }))
);

const NotFound = lazy(() =>
  import('../pages/NotFound').then(module => ({
    default: module.NotFound,
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
          <Route path="home" element={<Home />} />
          <Route path="find_pet" element={<FindPet />} />
          <Route path="news" element={<News />} />
          <Route path="our_friend" element={<OurFriend />} />
          <Route
            path="login"
            element={<Login />}
            // element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />
          <Route
            path="register"
            element={<Register />}
            // element={
            //   <RestrictedRoute redirectTo="/" component={<Register />} />
            // }
          />
          <Route
            path="profile"
            element={<Profile />}
            // element={
            //   <PrivateRoute redirectTo="/login" component={<Profile />} />
            // }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
};
