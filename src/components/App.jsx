import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from 'redux/authSelectors';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/authOperation';
import { PrivateRoute } from './PrivateRoute';
import { NotFound } from 'pages/NotFound/NotFound';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/HomePage'));
const Register = lazy(() => import('../pages/Register/RegisterPage'));
const Login = lazy(() => import('../pages/Login/LoginPage'));
const Contacts = lazy(() => import('../pages/Contacts/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}