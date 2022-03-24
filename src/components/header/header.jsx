import React  from 'react';
import './header.css';
import logo from '../../assets/img/logo.png';
import menuButton from '../../assets/img/menu-icon.png';
import accountButton from '../../assets/img/account-icon.png'

export const Header = () => {
  return (
    <header>
    <div class="logo">
      <img src={logo} alt="headway" />
    </div>
    <nav>
      <div className="account-btn">
          <img src={accountButton} alt="account"/>
      </div>
      <div className="menu-btn">
          <img src={menuButton} alt="menu"/>
      </div>
    </nav>
  </header>
  )
}

export default Header;
