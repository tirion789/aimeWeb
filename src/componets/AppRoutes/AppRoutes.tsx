import React from 'react';
import Home from '../../pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Anime from '../../pages/Anime/Anime';
import GenrePage from '../../pages/GenrePage/GenrePage';
import Profile from '../../pages/Profile/Profile';
import '../../assets/scss/index.scss';
import InDevelopment from '../../pages/InDevelopment/InDevelopment';
import { useAuth } from '../../hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Loader from '../Loader/Loader';

const AppRoutes = () => {
  const { isLoading, isAuth } = useAuth();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/filters" element={<GenrePage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/inDevelopment" element={<InDevelopment />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export { AppRoutes };
