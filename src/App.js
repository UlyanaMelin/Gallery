import React, { useEffect, useState, useLayoutEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Filters from './Components/Filters/Filters';
import Pictures from './Components/Pictures/Pictures';
import PaginationGallery from './Components/Pagination/Pagination';
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const App = () => {
  const [currentIdNames, setCurrentIdNames] = useState(0);
  const [currentIdAuthors, setCurrentIdAuthors] = useState(0); //поиск эллемента массива по айди автора
  const [currentIdLocation, setCurrentIdLocation] = useState(0);
  const [currentIdCreated, setCurrentIdCreated] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginateTotal, setPaginateTotal] = useState(1);
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);
  
  const useTheme = () => { 
    useLayoutEffect(()=>{
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('app-theme', theme)
    },[theme])
  return{theme,setTheme};
  };
  useTheme();

  return (
    <div className="App">
      <Header setTheme={setTheme}/>
      <Filters 
      currentIdNames={currentIdNames}
      setCurrentIdNames={setCurrentIdNames} 
      setCurrentIdAuthors={setCurrentIdAuthors}
      setCurrentIdLocation={setCurrentIdLocation} 
      setCurrentIdCreated={setCurrentIdCreated}
      currentPage={currentPage}
      />
      <Pictures 
      currentIdNames={currentIdNames}
      currentIdAuthors={currentIdAuthors} 
      currentIdLocation={currentIdLocation} 
      currentIdCreated={currentIdCreated}
      currentPage={currentPage} 
      setPaginateTotal={setPaginateTotal}
      />
      <PaginationGallery 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage} 
      paginateTotal={paginateTotal}
      />
    </div>
  );
}

export default App;

