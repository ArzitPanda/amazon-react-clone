import React from 'react';
import "./Header.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function Header() {

    const amazonLogo="https://www.pinclipart.com/picdir/big/444-4440792_amazon-png-transparent-image-amazon-logo-hd-png.png";


    return (
        <div>
         <div className="headerContainer">
             <img  src={amazonLogo} alt="amazon-logo" height="30px" className="logo-amz"/>
                <input type="text" placeholder="type something" className="input-search"/>
                <SearchTwoToneIcon/>
             
             cart
         </div>   
        </div>
    )
}

export default Header
