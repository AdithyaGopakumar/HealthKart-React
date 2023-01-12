import React from "react";

const DisplayOrder = (props) => {
  const renderTable = ({ orderData }) => {
    if (orderData) {
      return orderData.map((item) => {
        console.log(item);
        return (
          <tr key={item.order_id}>
            <td>{item.order_id}</td>
            <td>{item.user}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>Rs. {item.total}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
            <td>{item.bank_name}</td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <div className="container">
        <h1>Your Orders</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Total</th>
              <th>Date</th>
              <th>Bank</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{renderTable(props)}</tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayOrder;
