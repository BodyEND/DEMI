import { useGeneralDataStore } from '@/stores/generalDataStore'
import axios from 'axios'

export function produkty() {
  const generalDataStore = useGeneralDataStore()

  axios.post("/produkty.php", {})
    .then((response) => {
      const res = response.data;

      if ('produkty' in res) {//--------ak sa vrati uzivatel prihlaseny
        generalDataStore.produkty=res.produkty
      }

    })
}

