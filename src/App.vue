<script setup lang="ts">
import { onMounted } from 'vue'
import {axiosSetup} from './axios.ts'
import {useRouter} from 'vue-router'
import LeftMenu from './views/leftMenu.vue'
import GlobalLoader from './components/globalLoader.vue'
import {useGeneralDataStore} from './stores/generalDataStore.ts'
import { initialLoad } from './use/initialLoad.ts'
const generalDataStore=useGeneralDataStore()
const router=useRouter()

onMounted(() => {
  axiosSetup()
  initialLoad(router)
})

</script>

<template>
  <div class="flex min-h-screen w-full justify-start bg-gray-50 bg-gradient-to-br from-slate-50 to-slate-200">
    <div class="w-full shrink grow p-0 md:p-2">
      <LeftMenu v-if="generalDataStore.uzivatelPrihlaseny"></LeftMenu>
        <router-view></router-view>
    </div>
  </div>
  <teleport v-if="generalDataStore.globalLoader" to="body">
    <GlobalLoader></GlobalLoader>
  </teleport>
</template>
