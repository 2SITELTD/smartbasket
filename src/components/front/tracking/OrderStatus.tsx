
import React from 'react';
import { useSelector } from 'react-redux';
import { OrderStatusButton } from './OrderStatusButton';
import { RootState } from '../../../store';

export const OrderStatus: React.FC = () => {
  // Get the most recent order (first in the list)
  const orders = useSelector((state: RootState) => state.order.orders);
  const latestOrder = orders[0]; // Most recent order will be at index 0

  // Get the status of the latest order
  const orderStatus = latestOrder?.status;

  const statuses = [
    {status: "הזמנה אושרה", complete: true},
    {status: "הזמנה מוכנה", complete: true},
    {status:"השליח בדרך", complete: false},
    {status: "הזמנה הושלמה", complete: false}
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex gap-14 justify-between items-center p-5 mx-auto my-0 max-w-[984px] flex-row-reverse max-md:flex-wrap max-md:gap-10 max-md:justify-center max-md:p-4 max-sm:gap-5 max-sm:p-2.5">
        {statuses.map((status, index) => (
          <OrderStatusButton
            key={index}
            status={status.status}
            isActive={orderStatus === status.status}
            complete={status.complete}
          />
        ))}
      </div>
    </>
  );
};
