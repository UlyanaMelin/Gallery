import React, { useEffect, useState } from 'react';
import style from './../Pagination/Pagination.module.css';
import { Pagination } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import store from '../../store';


const PaginationGallery = observer(({currentPage, setCurrentPage, paginateTotal}) => {
  
    return (
      <div className={style.pagination_wrapper} margin-bottom={30} >
        <Pagination total={store.paginateTotal} color="dark" size="lg" radius="xs" value={currentPage} onChange={setCurrentPage}  />
      </div>
    );
  });

  export default PaginationGallery;























  // import React, { useEffect, useState } from 'react';
  // import style from './../Pagination/Pagination.module.css';
  // import Axios from 'axios';
  // const URL = "https://test-front.framework.team";
  
  // const PaginationGallery = ({picturesGalleryPage, totalPaintings, paginate}) => {
  //     const pageNumbers = [];
  //     const [currentPage, setCurrentPage] = useState(10);
  //     const nextPage = () => setCurrentPage(prev => prev + 1)
  
  //     for (let i = 1; i <= Math.ceil (totalPaintings / picturesGalleryPage); i++ ){
  //       pageNumbers.push(i);
  //     }
  
  
  //     return (
  //       <div className={style.pagination_wrapper}>
  //         <ul className='pagination'>
  //         <button className='btn btn-primary ms-2'>{'<'}</button>
  //           {
  //             pageNumbers.map(number =>(
  //               <li className='page-item' key={number}>
  //                 <a href='!#' className='page-link' onClick={()=>paginate(number)}>
  //                   {number}
  //                   </a>
  //               </li>
  //             ))
  //           }
  //            <button className='btn btn-primary ms-2' onClick={nextPage} >{'>'}</button>
  //         </ul>
  //       </div>
  //     );
  //   };
    
  //   export default PaginationGallery;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
