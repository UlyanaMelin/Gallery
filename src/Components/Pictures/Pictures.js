import React, { useEffect, useState } from 'react';
import style from './../Pictures/Pictures.module.css';
import axios from 'axios';
import store from '../../store';
import { observer } from 'mobx-react-lite';

const URL = "https://test-front.framework.team";

const Pictures = observer (({currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated,  currentPage, setPaginateTotal}) => {
  const paintings = store.paintings;
  const authors = store.authors;
  const locations = store.locations;
  const accept = 'application/json'; //шабллон который используется в header
  
  useEffect(() =>{
    store.getPaintings(currentPage);
  },[currentPage]);

  useEffect(() => {
    store.getAllFilters(currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated, currentPage);
  }, [currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated]);

  useEffect(() => {
    store.getAuthors();
    store.getLocations();
    store.getPaginationPage();
  }, []);

  const renderAuthors = (authorId) => {
    const objectAuthor = authors.find(el => el.id === authorId);
    if (objectAuthor){
      return(
        <p className={style.textCard} key={objectAuthor.id}>{objectAuthor.name}</p>
      )
      } return null;
  };

   const renderLocation = (locationId) => {
    const objectLocation = locations.find(el => el.id === locationId);
    if (objectLocation){
      return(
        <p className={style.textCard} key={objectLocation.id}>{objectLocation.location}</p>   
      )
      }  return null;
  };

    return (
      <div className={style.pictures_wrapper}>
        {paintings.map(paintings=>(
          <div key={paintings.id}>
            <div className={style.card} width={360} height={275}>
                <img className={style.pictureGallery} src={`${URL}`+ paintings.imageUrl} width={360} height={275}/>
                <div className={style.nameCardImg}>{paintings.name}</div>
              <div className={style.cardContent}>
                <div className={style.cardInformation}>
                  <p className={style.nameCard}>{paintings.name}</p>
                  <span className={style.spancard}>
                    <p className={style.titleCard}>Author:</p>
                    {renderAuthors(paintings.authorId)}
                  </span>
                  <span className={style.spancard}>
                    <p className={style.titleCard}>Created:</p>
                    <p className={style.textCard}>{paintings.created}</p>
                  </span>
                  <span className={style.spancard}>
                    <p className={style.titleCard}>Location:</p>
                    {renderLocation(paintings.locationId)}           
                  </span>
                  </div>
              </div>
            </div>
        </div>
        ))};
      </div>
    );
  });
  
  export default Pictures;

 