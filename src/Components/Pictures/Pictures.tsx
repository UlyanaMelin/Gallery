import React, { useEffect } from 'react';
// @ts-ignore
import style from './../Pictures/Pictures.module.css';
import store from '../../store';
import { observer } from 'mobx-react-lite';

const URL = "https://test-front.framework.team";

interface PicturesProps {
  currentIdNames: string,
  currentIdAuthors: string,
  currentIdLocation: string,
  currentIdCreated: string,
  currentPage: number;
};

type Paintings = {
  authorId:number,
  created:string,
  id:number,
  imageUrl:string,
  locationId:number,
  name:string,
}[];

type Authors = {
  id: number,
  name: string,
}[];

type Locations = {
  id: number,
  location: string,
}[];

const Pictures: React.FC<PicturesProps> = observer (({currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated, currentPage}) => {
  const paintings : Paintings = [...store.paintings]; 
  const authors : Authors = [...store.authors]; 
  const locations : Locations = [...store.locations]; 
  
  useEffect(() =>{
    store.getPaintings(currentPage);
  },[currentPage]);

  useEffect(() => {
    store.getAllFilters(currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated, currentPage);
  }, [currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated, currentPage]);

  useEffect(() => {
    store.getAuthors();
    store.getLocations();
    store.getPaginationPage();
  }, []);

  const renderAuthors = (authorId: number) => {
    const objectAuthor = authors.find(el => el.id === authorId);
    if (objectAuthor){
      return(
        <p className={style.textCard} key={objectAuthor.id}>{objectAuthor.name}</p>
      )
      } return null;
  };

  const renderLocation = (locationId: number) => {
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
            <div className={style.card}>
                <img className={style.pictureGallery} alt='picturesGallery' src={`${URL}`+ paintings.imageUrl} width={360} height={275}/>
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

 