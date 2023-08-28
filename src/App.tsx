import React, { useState, useLayoutEffect, FC } from 'react';
import './App.css';
// @ts-ignore
import Header from './Components/Header/Header.tsx';
import Filters from './Components/Filters/Filters';
import Pictures from './Components/Pictures/Pictures';
import PaginationGallery from './Components/Pagination/Pagination';
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const App: FC = () => {
  const [currentIdNames, setCurrentIdNames] = useState<string>("");
  const [currentIdAuthors, setCurrentIdAuthors] = useState<string>("");
  const [currentIdLocation, setCurrentIdLocation] = useState<string>("");
  const [currentIdCreated, setCurrentIdCreated] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginateTotal] = useState(1);
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
      setCurrentIdNames={setCurrentIdNames} 
      setCurrentIdAuthors={setCurrentIdAuthors}
      setCurrentIdLocation={setCurrentIdLocation} 
      setCurrentIdCreated={setCurrentIdCreated}
      />
      <Pictures 
      currentIdNames={currentIdNames}
      currentIdAuthors={currentIdAuthors} 
      currentIdLocation={currentIdLocation} 
      currentIdCreated={currentIdCreated}
      currentPage={currentPage} 
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

