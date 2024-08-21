import logo from './logo.svg';
import React from 'react';
import Sidebar from './components/Sidebar'
// import Header from './components/Header.js';
import SearchBar from './components/SearchBar';
import OrderDetails from './components/orderdetail';
// import DinnerMenu from './components/DinnerMenu.js';
import CartInformation from './components/CartInformation';
import './App.css';

function App() {
  return (
    <div className="app container">
    
    <Sidebar />
    {/* <SearchBar/> */}
    {/* <SearchBar/> */}
    <OrderDetails />

</div>
  );
}

export default App;


// function App() {
//     return (
     
//     );
// }

// export default App;

