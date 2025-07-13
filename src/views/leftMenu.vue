<script setup lang="ts">
import { useGeneralDataStore } from '@/stores/generalDataStore';
import { RouterView, useRouter } from 'vue-router';
import {useRoute,type RouteRecordName} from 'vue-router'
import axios from 'axios'
import MenuItem from './leftMenu/menuItem.vue'
const generalDataStore=useGeneralDataStore()
const router=useRouter()
const route=useRoute()

const odhlasenie=()=>{
  generalDataStore.odhlasUzivatela()
  localStorage.removeItem('Dtoken')
  delete axios.defaults.headers.common['Authorization'];
  router.push({name:'login'})
}

</script>
<template>
  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
     <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul class="space-y-2 font-medium">
         <MenuItem :link="'uzivatel'" :text="'Užívateľ'"></MenuItem>
         <MenuItem :link="'objednavky'" :text="'Objednávky'"></MenuItem>
         <MenuItem :link="'produkty'" :text="'Produkty'"></MenuItem>
           <li>
              <span @click="odhlasenie()" class="flex items-center p-2 text-red-500 rounded-lg hover:bg-gray-100 hover:bg-red-900/30 group cursor-pointer">
                 <svg class="shrink-0 w-5 h-5 text-red-400 transition duration-75 group-hover:text-gray-900 group-hover:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                 </svg>
                 <span class="flex-1 ms-3 whitespace-nowrap">Odhlásenie</span>
              </span>
           </li>
        </ul>
     </div>
  </aside>
</template>