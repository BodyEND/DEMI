<script setup lang="ts">
import { useGeneralDataStore } from '@/stores/generalDataStore';
import { type Uzivatel } from '@/types/types';
import {ref, onBeforeMount} from 'vue'
const generalDataStore=useGeneralDataStore()
import DetailObjednavky from './objednavkyView/detailObjednavky.vue';
import { objednavky } from '@/use/objednavky';

onBeforeMount(()=>{
  if(generalDataStore.objednavky.length==0){
    objednavky()
  }
})


</script>
<template>
<div class="p-4 sm:ml-64 ">
  <template v-if="generalDataStore.objednavky.length==0">
    Nemáte žiadnu objednávku
  </template>
  <template v-for="objednavka in generalDataStore.objednavky" :key="`objednavka-${objednavka.id}`">
    <DetailObjednavky :objednavka="objednavka"></DetailObjednavky>
  </template>
</div>

</template>