import React from 'react';

function Sidebar() {
    return (
        <div className="sidebar  " >
            <h1 class='logo'>streetline</h1>
            <div class="sidebar-menu "  >

            {/* <div class="sidebar-menu"> */}
                <a class="sidebar-menu " link="www.google.com">Orders</a>
                <a class="sidebar-menu "  href="#">Menus</a>
                <a class="sidebar-menu " href="#">Create Order</a>
                <a class="sidebar-menu " href="#">Tables</a>
                <a class="sidebar-menu " href="#">Employees</a>
                <a class="sidebar-menu " href="#">Inventory</a>
                <a class="sidebar-menu " href="#">Kitchen Orders</a>
                <a class="sidebar-menu " href="#">Analytics</a>
                <a class="sidebar-menu " href="#">Settings</a>
                <a class="sidebar-menu "href="#">Log Out</a>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Sidebar;
