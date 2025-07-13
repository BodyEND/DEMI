<script setup lang="ts">
import { useGeneralDataStore } from '@/stores/generalDataStore';
import ProduktyPaginator from './produktyView/produktyPaginator.vue';
import {ref, onBeforeMount,computed} from 'vue'
const generalDataStore=useGeneralDataStore()
import ProduktBox from './produktyView/produktBox.vue';
import { produkty } from '@/use/produkty';

const page=ref<number>(1)
const perPage=10;

const maxPages = computed(() => {
  return Math.ceil(generalDataStore.produkty.length / perPage);
});

const aktualneProduktyNaStranke = computed(() => {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  return generalDataStore.produkty.slice(start, end);
});

onBeforeMount(()=>{
  if(generalDataStore.produkty.length==0){
    produkty()
  }
})
</script>
<template>
<div class="p-4 sm:ml-64 ">
  <template v-if="generalDataStore.produkty.length==0">
    Nenašli sa žiadne produkty
  </template>
  <ProduktyPaginator v-if="generalDataStore.produkty.length>0" :page="page" :maxPages="maxPages" @page-change="(e)=>page=e"></ProduktyPaginator>
  <div v-if="generalDataStore.produkty.length>0" class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4">
    <template v-for="produkt in aktualneProduktyNaStranke" :key="`produkt-${produkt.id}`">
      <ProduktBox :produkt="produkt"></ProduktBox>
    </template>
  </div>
  <ProduktyPaginator v-if="generalDataStore.produkty.length>0" :page="page" :maxPages="maxPages" @page-change="(e)=>page=e"></ProduktyPaginator>
</div>

</template>