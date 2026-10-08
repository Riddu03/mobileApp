import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const  MyHeader =  ()=> {

return (<>	

  <div>
   
   
      <nav class="navbar admin-navbar navbar-expand bg-white">
        <div class="container-fluid">
        




<nav class="navbar-actions ms-auto">
<div class="dropdown">
<span class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
<span class="profile-name d-none d-sm-inline">Manage Super Admin</span>
</span>
<ul class="dropdown-menu dropdown-menu-end menu1">
<li><Link class="dropdown-item" to="/industry">Industry</Link></li>
<li><Link class="dropdown-item" to="/vendor">Vendor</Link></li>
<li><Link class="dropdown-item" to="/vendor">Category</Link></li>
</ul>
</div>








        </nav>










          <div class="navbar-actions ms-auto">
            <button class="icon-button theme-toggle" type="button" data-theme-toggle aria-label="Switch color theme" title="Switch color theme">
              <i class="bi bi-moon-stars" data-theme-icon aria-hidden="true"></i>
            </button>
            <div class="dropdown">
              <button class="icon-button" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Notifications">
                <span class="notification-dot"></span>
                <i class="bi bi-bell" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end notification-menu">
                <div class="dropdown-header fw-bold text-body">Notifications</div>
                <a class="dropdown-item" to="users.html">
                  <span class="notification-title">New user registered</span>
                  <span class="notification-time">4 minutes ago</span>
                </a>
                <a class="dropdown-item" to="charts.html">
                  <span class="notification-title">Revenue target reached</span>
                  <span class="notification-time">32 minutes ago</span>
                </a>
                <a class="dropdown-item" to="settings.html">
                  <span class="notification-title">Security review completed</span>
                  <span class="notification-time">1 hour ago</span>
                </a>
              </div>
            </div>

            <div class="dropdown">
              <button class="profile-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="avatar-img avatar-sm" src="../assets/images/avatar/avatar.jpg" alt="Admin Hasan" />
                <span class="profile-name d-none d-sm-inline">Admin Hasan</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" to="profile.html">Profile</a></li>
                <li><a class="dropdown-item" to="settings.html">Account settings</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" to="login.html">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
 </div>
</>);
}
export default MyHeader;
