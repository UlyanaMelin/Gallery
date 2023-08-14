import React, { useEffect, useState } from 'react';
import style from './../Header/Header.module.css';
import logoFWT from './../Header/logoFWT.png';
import sun from './../Header/sun.png';
import sun_light from './../Header/sun_light.png';

const Header = ({setTheme}) => {
  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

    return (
      <div className={style.header_wrapper}>
        <img className={style.logo} src={logoFWT}/> 
        <div className={style.iconsTheme}>
          <img className={style.sun} src={sun_light} onClick={handleLightThemeClick}/> 
          <img className={style.sun} src={sun} onClick={handleDarkThemeClick}/> 
        </div>
      </div>
    );
  };
  
  export default Header;
 