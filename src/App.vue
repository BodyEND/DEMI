<script setup lang="ts">
import {axiosCall} from './axios.ts'
import GlobalLoader from './components/globalLoader.vue'
import {useGeneralDataStore} from './stores/generalDataStore.ts'
const generalDataStore=useGeneralDataStore()
</script>

<template>



  <template v-if="generalDataStore.uzivatel?.prihlaseny">
  <menuTop></menuTop>
  <div class="flex min-h-screen w-full justify-start bg-gray-50 bg-gradient-to-br from-slate-50 to-slate-200">
    <menuLeft></menuLeft>
    <div class="w-full shrink grow p-0 md:p-2">
        <router-view></router-view>
    </div>
  </div>
  </template>
  <teleport to="body" v-if="generalDataStore.globalLoader">
    <GlobalLoader></GlobalLoader>
  </teleport>
</template>
