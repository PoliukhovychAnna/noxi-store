import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { ShoppingCartPage } from 'pages/ShoppingCartPage/ShoppingCart';
import { PreorderGoodsPage } from 'pages/Pre-orderGoodsPage/Pre-orderGoodsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/pre-order-goods" element={<PreorderGoodsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
