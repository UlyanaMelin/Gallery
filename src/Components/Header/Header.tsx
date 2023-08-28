import React from 'react';
// @ts-ignore
import style from './../Header/Header.module.css';
// @ts-ignore
import logoFWT from './../Header/logoFWT.png';
// @ts-ignore
import sun from './../Header/sun.png';
// @ts-ignore
import sun_light from './../Header/sun_light.png';

interface HeaderProps {
  setTheme: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({setTheme}) => {
  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

    return (
      <div className={style.header_wrapper}>
        <img className={style.logo} src={logoFWT} alt='logo'/> 
        <div className={style.iconsTheme}>
          <img className={style.sun} src={sun_light} alt='sun_light' onClick={handleLightThemeClick}/> 
          <img className={style.sun} src={sun} alt='sun_dark' onClick={handleDarkThemeClick}/> 
        </div>
      </div>
    );
  };
  
  export default Header;

 