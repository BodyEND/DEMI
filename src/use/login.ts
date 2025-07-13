import { useGeneralDataStore } from '@/stores/generalDataStore'
import axios from 'axios'
// import { i18n } from '@/i18n';
import {type Router} from 'vue-router'


//------musim posunut router ako vstup inak by to hadzalo inject warning
export async function login(email:string,password:string, router:Router) {
  const generalDataStore = useGeneralDataStore()
  axios.post("/login.php", { email: email, password: password })
    .then((response) => {
      const res = response.data
      if ('success' in res) {
        if (!res.success) {//-------neuspesne prihlasenie - chyba
          alert(res.message)
        } else {
          if ('Dtoken' in res) {
            
            if ('uzivatel' in res && 'uzivatelPrihlaseny' in res) {
              generalDataStore.setUzivatel(res.uzivatel)
              generalDataStore.uzivatelPrihlaseny=res.uzivatelPrihlaseny
            }
            axios.defaults.headers.common['Authorization'] = res.Dtoken;
            localStorage.setItem("Dtoken", res.Dtoken);
            //---- po prihlaseni je uzivatel prihlaseny
            router.push({ name: 'uzivatel' });
          }
        }
      }
    })
  }