import httpaxios from '../httpaxios';

import axios, { AxiosResponse } from 'axios';

class DataService {

  getAxiosMedicament() {
    return httpaxios.get("/medicaments/medicaments");
  };


}

