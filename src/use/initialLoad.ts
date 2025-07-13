import { useGeneralDataStore } from '@/stores/generalDataStore'
import axios from 'axios'
import { type Router } from 'vue-router'

export function initialLoad(router:Router) {
  const generalDataStore = useGeneralDataStore()

  axios.post("/initialLoad.php", {})
    .then((response) => {
      const res = response.data;

      if ('uzivatelPrihlaseny' in res) {//--------ak sa vrati uzivatel prihlaseny
        generalDataStore.uzivatelPrihlaseny=res.uzivatelPrihlaseny
        generalDataStore.setUzivatel(res.uzivatel)
      }else{
        generalDataStore.odhlasUzivatela()
        localStorage.removeItem('DToken')
      }


      if (generalDataStore.uzivatelPrihlaseny) {
        router.push({ name: 'uzivatel' });
      }else{
        router.push({ name: 'login' });
      }
    })
}

