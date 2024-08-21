import React from 'react';

const Sidebar2 = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="sidebar2">
      <div className="header">
        <h2>Order Information</h2>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
      <div className="order-info">
        <div className="tab-buttons">
          <button className="active">Dine In</button>
          <button>Take Away</button>
        </div>
        <div className="order-details">
          <p>Order #{order.orderNo}</p>
        
          <p>Token - {order.token}</p>
          <h7>Table No - {order.table}</h7>
        </div>
        <div className="items">
          {order.items.map((item, index) => (
            <div className="item" key={index}>
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dpizza&psig=AOvVaw2Fku_n0W-eK5PQwMxVTokT&ust=1724304890507000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC5tLWuhYgDFQAAAAAdAAAAABAE" alt={item.name} />
              <div className="item-details">
                <p>{item.name} ({item.size})</p>
                <span>{item.qty}X</span>
                <p>{item.instructions}</p>
              </div>
              <p className="price">₹{item.price}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="add-items">+ Add Items</button>
          <button className="print-kot">Print KOT</button>
          <button className="print-invoice">Print Invoice</button>
          <button className="pay-later">Pay Later</button>
        </div>
      
        <div className="payment-options">
          <h3>Change Payment Option:</h3>
          <button className="accept-cash">Accept Cash Before</button>
          <button className="update-order">Update Order</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
