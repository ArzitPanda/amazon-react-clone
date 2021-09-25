import React from 'react';
import './Header.css';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  const amazonLogo =
    'https://www.pngfind.com/pngs/m/70-701602_amazon-prime-logo-png-wwwimgkidcom-the-image-kid.png';

  return (
    <div>
      <div className="headerContainer">
        <img
          src={amazonLogo}
          alt="amazon-logo"
          height="30px"
          className="logo-amz"
        />
        <div className="search__box">
          <input type="text" className="input-search" />
          <SearchTwoToneIcon className="search_icon" />
        </div>
        <div className="signin">
          <div className="firsttest">hello user</div>
          <div className="secondtest">signin</div>
        </div>
        <div className="signin">
          <div className="firsttest">your</div>
          <div className="secondtest">orders</div>
        </div>
        <div className="shop">
          <ShoppingCartIcon className="ShoppingCart" />
          <div className="circle">
            <h1 className="cart-items">2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
