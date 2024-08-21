// import React from 'react';

// const OrderCard = ({ order, onViewItemClick }) => {
//   return (
//     <div className="order-card">
      
//       <h3>Order #{order.orderNo}</h3>
//       <p>Table: {order.table}</p>
//       <button onClick={onViewItemClick}>View Item</button>
//     </div>
//   );
// };

// export default OrderCard;
import React from 'react';

const OrderCard = ({ order, onViewItemClick }) => {
  return (
    <div className="order-card">
      <div className="order-header">
        <div className="token-info">
          <h2 className="token-number">T{order.tokenNo}</h2>
          <a className="order-number">Order #{order.orderNo}</a>
        </div>
     
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>₹ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="amount-section">
        <p><strong>Total Amount:</strong> ₹ {order.totalAmount}</p>
        <h9><strong>Remaining Amount:</strong> ₹ {order.remainingAmount}</h9>
      </div>

      <div className="action-buttons">
        <button className="btn btn-red" onClick={onViewItemClick}>View Items</button>
        <button className="btn-secondary">Enter Customer Info</button>
        <button className="btn-secondary">Print Invoice</button>
        <button className="btn-secondary">Assign Staff</button>
      </div>

      <div className="payment-options">
        <button className="btn-success">Accept Cash Before</button>
        <button className="btn-success">Pay Later</button>
      </div>
    </div>
  );
};

export default OrderCard;
