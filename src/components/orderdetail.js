import React, { useState } from 'react';
import OrderCard from './ordercard';
import orders from '../data/orders.json';
import Sidebar2 from './sidebar2';

const OrderDetails = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleViewItemClick = (order) => {
    setSelectedOrder(order);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="order-details">

      <div className="order-list">
        <div>DASHBOARD</div><br/>
        <div class='main-ele'>

        <a class='sidebar-menu' href='#'>all</a>
        <a class='sidebar-menu'  href='#'>new order</a>
        <a class='sidebar-menu' href='#'>dine in</a>
        <a class='sidebar-menu' href='#'>take away</a>
        <a class='sidebar-menu' href='#'>payment</a>
        </div>
        <div class='orders'>

        
        {orders.map((order) => (
          <OrderCard
          key={order.id}
          order={order}
          onViewItemClick={() => handleViewItemClick(order)}
          />
        ))}
        </div>
      </div>
      {isSidebarOpen && (
        <Sidebar2 order={selectedOrder} onClose={handleCloseSidebar} />
      )}
    </div>
  );
};

export default OrderDetails;
