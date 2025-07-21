import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopLayout from './ShopLayout';

const ShopOrders = () => {
  return (
    <ShopLayout>
      <Outlet />
    </ShopLayout>
  );
};

export default ShopOrders;
