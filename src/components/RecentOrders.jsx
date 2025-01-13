import React from 'react';
import './styles.css';

const orders = [
  { id: 3000, date: 'May 9, 2024', customer: 'Leslie Alexander', event: 'Bear Hug:live in Concert', amount: 'US$80.00' },
  { id: 3001, date: 'May 5, 2024', customer: 'Michael Foster', event: 'Six Fingers-DJ Set', amount: 'US$299.00' },
  { id: 3002, date: 'Apr 28, 2024', customer: 'Dries Vincent', event: 'We All Look The Same', amount: 'US$150.00' },
  { id: 3003, date: 'Apr 23, 2024', customer: 'Lindsay Walton', event: 'Bear Hug:live in Concert', amount: 'US$80.00' },
  { id: 3004, date: 'Apr 18, 2024', customer: 'Courtney Henry', event: 'Vikking people', amount: 'US$114.99' },
  { id: 3005, date: 'Apr 14, 2024', customer: 'Tom Cook', event: 'Six Finger - DJ set', amount: 'US$299.00' },
  { id: 3006, date: 'Apr 10, 2024', customer: 'Whitney Francise', event: 'We All Look The Same', amount: 'US$150.00' },
  { id: 3007, date: 'Apr 6, 2024', customer: 'Leslie Alexander', event: 'Six Fingers-DJ Set', amount: 'US$150.00' },
  { id: 3008, date: 'Apr 3, 2024', customer: 'Michael Foster', event: 'Bear Hug:live in Concert', amount: 'US$150.00' },
  { id: 3009, date: 'Apr 1, 2024', customer: 'Lindsay Walton', event: 'Vikking people', amount: 'US$150.00' },
  { id: 3010, date: 'mar 28, 2024', customer: 'Whitney Francise', event: 'Six Fingers-DJ Set', amount: 'US$150.00' },
  { id: 3011, date: 'mar 20, 2024', customer: 'Tom Cook', event: 'Bear Hug:live in Concert', amount: 'US$150.00' },
  { id: 3012, date: 'mar 12, 2024', customer: 'Michael Foster', event: 'We All Look The Same', amount: 'US$150.00' },
  { id: 3013, date: 'mar 8, 2024', customer: 'Courtney Henry', event: 'Six Fingers-DJ Set', amount: 'US$150.00' },
];

const RecentOrders = () => (
  <div className="table-container">
    <h2>Recent orders</h2>
    <table>
      <thead>
        <tr>
          <th>Order #</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Event</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.customer}</td>
            <td>{order.event}</td>
            <td>{order.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentOrders