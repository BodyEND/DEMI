import { useGeneralDataStore } from '@/stores/generalDataStore'
import axios from 'axios'

export function objednavky() {
  const generalDataStore = useGeneralDataStore()

  axios.post("/objednavky.php", {})
    .then((response) => {
      const res = response.data;

      if ('objednavky' in res) {//--------ak sa vrati uzivatel prihlaseny
        generalDataStore.objednavky=res.objednavky
      }

    })
}

