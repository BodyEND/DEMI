import { useGeneralDataStore } from '@/stores/generalDataStore.ts'
import {pinia} from './pinia'
import axios from 'axios'
const generalDataStore = useGeneralDataStore(pinia)

export const axiosSetup=()=>{
  axios.defaults.baseURL = generalDataStore.DOMAINBACKEND
  const Dtoken = localStorage.getItem('Dtoken');
  if(Dtoken){
    axios.defaults.headers.common['Authorization'] = Dtoken;
  }

  // Request interceptor
  axios.interceptors.request.use(
    (config) => {
      generalDataStore.globalLoader=true
      return config
    },
    (error) => {
      generalDataStore.globalLoader=false
      return Promise.reject(error)
    }
  ) 

  // Response interceptor
  axios.interceptors.response.use(
    (response) => {
      generalDataStore.globalLoader=false
      // Success
      if('Dtoken' in response.data){
        axios.defaults.headers.common['Authorization'] = response.data.Dtoken;
        localStorage.setItem("Dtoken", response.data.Dtoken);
      }
      return response
    },
    (error) => {
      // Error
      generalDataStore.globalLoader=false

      let message='Chyba v spojení so serverom'
      if ('x-error-message' in error.response.headers) {
        message=error.response.headers['x-error-message']
        alert('Chyba 500 ' +error.response.headers['x-error-message'])
      }

      if (error.response.status === 401) {
        alert('Odhlasenie uzivatela 401')
      }else{
        alert('vypisanie chyby ' + message)
      }
      return Promise.reject(error)
    }
  ) 

}

