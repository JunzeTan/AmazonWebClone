import React from 'react'
import './Header.css'
import { SearchIcon } from '@mui/icons-material/Search'


function Header() {
  return (
    <div className='header'>
        <img 
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
        <div
        className='header__search'>
          <input
          className='header__searchInput' 
          type = 'text'/>
          <SearchIcon
          className="header__searchIcon"/>
        </div>
        <div
          className = "header__nav">
            <div className='header__option'>
              <span className='header___optionLineOne'>
                sign in
              </span>

            </div>
            <div className='header__option'>
            <span className='header___optionLineTwo'>
                orders
              </span>
            </div>
            <div className='header__option'>
            <span className='header___optionLineThree'>
                prime
              </span>
            </div>
        </div>
    </div>
  )
}

export default Header