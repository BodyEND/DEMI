import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {type Uzivatel, type Objednavky} from '../types/types'

export const useGeneralDataStore = defineStore('generalDataStore', () => {
  const DOMAINBACKEND="https://www.cenaphm.eu/DEMI"
  const globalLoader=ref<boolean>(true)
  const uzivatel = ref<Uzivatel>()
  const objednavky = ref<Objednavky[]>([])
  return { uzivatel, objednavky,globalLoader,DOMAINBACKEND }
})
