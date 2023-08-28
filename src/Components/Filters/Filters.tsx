import React, { useEffect} from 'react';
import { Select, Input } from '@chakra-ui/react';
import store from '../../store';
import { observer } from 'mobx-react-lite';
// @ts-ignore
import style from './style/Filters.module.css';

interface FiltersProps  {
  setCurrentIdAuthors: (id: string) => void;
  setCurrentIdLocation: (id: string) => void;
  setCurrentIdNames: (name: string) => void;
  setCurrentIdCreated: (created: string) => void;
}

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

const Filters: React.FC<FiltersProps> = observer(({ setCurrentIdAuthors, setCurrentIdLocation, setCurrentIdNames, setCurrentIdCreated }) => {

  const paintings : Paintings = [...store.paintingsFilters]; 
  const authors : Authors = [...store.authors];
  const locations : Locations = [...store.locations]; 

  useEffect(() => {
    store.getPaintingsFilters();
    store.getAuthors();
    store.getLocations();
  }, []);

    return(
      <div className={style.filters_wrapper}>
        <Input type='text' placeholder='Name' className={style.input} onChange={ e => setCurrentIdNames(e.target.value)}/>       
        <Select placeholder='Author' className={style.input} width={250} onChange={ e => {console.log(typeof e.target.value, 'author');setCurrentIdAuthors(e.target.value)}}>
          {authors.map(authors => (
          <option value={authors.id} key={authors.id}>{authors.name}</option>
        ))}
        </Select>
        <Select placeholder='Location' className={style.input} width={250} onChange={ e => {console.log(typeof e.target.value, 'location'); setCurrentIdLocation(e.target.value)}}>
          {locations.map(locations => (
          <option value={locations.id} key={locations.id}>{locations.location}</option>
        ))}
        </Select>
        <Select placeholder='Created' className={style.input} width={250} onChange={ e =>  {console.log(typeof e.target.value, 'created');setCurrentIdCreated(e.target.value)} }>
          {paintings.map(paintings => (
          <option value={paintings.created} key={paintings.id}>{paintings.created}</option>
        ))}
        </Select>
      </div>
    );
    });
    
  export default Filters;
