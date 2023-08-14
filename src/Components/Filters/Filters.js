import React, { useEffect, useState, useRef } from 'react';
import style from './../Filters/Filters.module.css';
import { Select, Input, Textarea } from '@chakra-ui/react';
import store from '../../store';
import { observer } from 'mobx-react-lite';

const Filters = observer (({setCurrentIdAuthors, setCurrentIdLocation, setCurrentIdNames, setCurrentIdCreated}) => {

  const paintings = store.paintingsFilters;
  const authors = store.authors;
  const locations = store.locations;

  useEffect(() => {
    store.getPaintingsFilters();
    store.getAuthors();
    store.getLocations();
  }, []);
   
  return(
      <div className={style.filters_wrapper}>
        <Input placeholder='Name' className={style.input} onChange={ e => setCurrentIdNames(e.target.value)}/>       
        <Select placeholder='Author' className={style.input} width={250} onChange={ e => setCurrentIdAuthors(e.target.value)}>
          {authors.map(authors => (
          <option value={authors.id} key={authors.id}>{authors.name}</option>
        ))}
        </Select>
        <Select placeholder='Location' className={style.input} width={250} onChange={ e => setCurrentIdLocation(e.target.value)}>
          {locations.map(locations => (
          <option value={locations.id} key={locations.id}>{locations.location}</option>
        ))}
        </Select>
        <Select placeholder='Created' className={style.input} width={250} onChange={ e => setCurrentIdCreated(e.target.value)} >
          {paintings.map(paintings => (
          <option value={paintings.created} key={paintings.id}>{paintings.created}</option>
        ))}
        </Select>
      </div>
  );
  });
  
  export default Filters;






// для фильтрации //

        {/* <div className={style.input} width={250}>
        <Textarea type='search' placeholder='Name' className={style.input} width={250} onChange={handleInputChange}/>       
          {filteredPaintings.map(paintings =>(
          <li key={paintings.id}>
            <img src={`${URL}`+ paintings.imageUrl} width={360} height={275} alt={paintings.name} className={style.pictureGallery}/>
          </li>
        ))}
        </div>    */}

  // const handleInputChange = event => {
  //   setCurrentIdNames(event.target.value.toLowerCase());
  // };  
  // const filteredPaintings = paintings.filter(painting => painting.name.toLowerCase().includes(currentIdNames));
  // console.log("🚀 ~ filteredPaintings:", filteredPaintings)






  {/* <Select placeholder='Name' className={style.input} width={250} onChange={ e => setCurrentIdNames(e.target.value)}>
          {paintings.map(paintings => (
          <option value={paintings.name} key={paintings.id}>{paintings.name}</option>
        ))}
        </Select> */}
























