// @ts-nocheck
import axios from 'axios';
import { makeAutoObservable , runInAction} from 'mobx';

const accept = 'application/json'; 
const URL = "https://test-front.framework.team";

class Store {

    paintings = [];
    paintingsFilters = [];
    authors = [];
    locations = [];
    arrayPagination = [];
    paginateTotal = 0;
    
    constructor() {
      makeAutoObservable(this);
    };

    getPaintingsFilters = async () => {
      try {
        const response = await axios(`${URL}/paintings`)
        runInAction(() => {
          this.paintingsFilters = response.data;
        });
      } catch (error) {
        console.error(error);
      }
    };
 
    getPaintings = async (currentPage) => {
      try {
        const response = await axios({
          url: `${URL}/paintings`,
          params: {
            _page:currentPage,
            _limit: 9,
          } ,
          headers: {
            accept: accept,
          },
        })
        runInAction(() => {
          this.paintings = response.data;
        });
      } catch (error) {
        console.error(error);
      }
    };

    getAuthors = async () => {
      try {
        const response = await axios(`${URL}/authors`)
        runInAction(() => {
          this.authors = response.data;
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    getLocations = async () => {
      try {
        const response = await axios(`${URL}/locations`)
        runInAction(() => {
          this.locations = response.data;
        });
      } catch (error) {
        console.log(error);
      }
    };   

    getPaginationPage = async () => {
      try {
        const response = await axios(`${URL}/paintings`);
        runInAction(() => {
          this.arrayPagination = response.data;
          this.paginateTotal = Math.ceil(this.arrayPagination.length / 9);
        });
      } catch (error) {
        console.error(error);
      }
    };

  getAllFilters = async (currentIdNames, currentIdAuthors, currentIdLocation, currentIdCreated, currentPage) => {
      try {
        let response;
        if (currentIdNames && currentIdAuthors && currentIdLocation && currentIdCreated) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              name: currentIdNames,
              authorId: currentIdAuthors,
              locationId: currentIdLocation,
              created: currentIdCreated,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdNames && currentIdAuthors && currentIdLocation) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              name: currentIdNames,
              authorId: currentIdAuthors,
              locationId: currentIdLocation,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdNames && currentIdAuthors) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              name: currentIdNames,
              authorId: currentIdAuthors,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdNames && currentIdLocation) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              name: currentIdNames,
              locationId: currentIdLocation,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdNames && currentIdCreated) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              name: currentIdNames,
              created: currentIdCreated,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdAuthors && currentIdLocation) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              authorId: currentIdAuthors,
              locationId: currentIdLocation,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdAuthors && currentIdCreated) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              authorId: currentIdAuthors,
              created: currentIdCreated,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdLocation && currentIdCreated) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              locationId: currentIdLocation,
              created: currentIdCreated,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdNames) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              name: currentIdNames,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdAuthors) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              authorId: currentIdAuthors,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdLocation) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              locationId: currentIdLocation,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else if (currentIdCreated) {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              created: currentIdCreated,
            },
            headers: {
              accept: accept,
            },
          });
          runInAction(() => {
            this.paintings = response.data;
          });
        } else {
          response = await axios({
            url: `${URL}/paintings`,
            params: {
              _page:currentPage,
              _limit: 9,
            } ,
            headers: {
              accept: accept,
            },
          })
          runInAction(() => {
            this.paintings = response.data;
          });
        }
        
      } catch (error) {
        console.error(error);
      }
    };  
};

export default new Store();