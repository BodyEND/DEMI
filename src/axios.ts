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
  axios.interceptors.response.use(
    (response) => {
      // Success
      if('Dtoken' in response.data){
        axios.defaults.headers.common['Authorization'] = response.data.Btoken;
        localStorage.setItem("Dtoken", response.data.Btoken);
      }
      return response
    },
    (error) => {
      // Error
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

