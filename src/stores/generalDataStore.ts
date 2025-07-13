import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {type Uzivatel, type Objednavky,type UzivatelPrihlaseny,type Produkty} from '../types/types'

export const useGeneralDataStore = defineStore('generalDataStore', () => {
  const DOMAINBACKEND="https://www.cenaphm.eu/DEMI"
  const defaultUzivatel: Uzivatel = {
    id: 0,
    spolocnost: '',
    ulica: '',
    mesto: '',
    psc: '',
    ico: '',
    dic: '',
    icdph: '',
    email: ''
  }
  const globalLoader=ref<boolean>(false)
  const uzivatel = ref<Uzivatel>(defaultUzivatel)
  const uzivatelPrihlaseny = ref<UzivatelPrihlaseny>(false)


  const objednavky = ref<Objednavky[]>([])
  const produkty = ref<Produkty[]>([])
  function setUzivatel(data: Uzivatel) {
    uzivatel.value = data
  }
  function odhlasUzivatela(){
    uzivatel.value=defaultUzivatel
    uzivatelPrihlaseny.value=false
  }
  return { uzivatel, objednavky,globalLoader,DOMAINBACKEND,uzivatelPrihlaseny,defaultUzivatel,produkty,setUzivatel,odhlasUzivatela }
})
