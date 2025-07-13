<script setup lang="ts">
import { useGeneralDataStore } from '@/stores/generalDataStore'
import {computed} from 'vue'
import { type Kosik } from '@/types/types';

const generalDataStore = useGeneralDataStore()


const props=defineProps<{kosik:Kosik}>()


const stavSkladu=computed(():string=>{
  let ret="bg-gray-400"
  if(props.kosik.sklad=="skladom"){ret="bg-green-400"}
  else if(props.kosik.sklad=="posledné kusy"){ret="bg-amber-400"}
  return ret
})

const formatToTwoDecimals = (value: number | string): string => {
  return parseFloat(value as string).toFixed(2);
};

</script>
<template>

  <div class="relative w-full border border-solid border-gray-200 pt-8 shadow-md pb-2">
    <div class="absolute left-0 right-0 top-0 flex justify-start">
      <span class="ml-auto px-1 py-0.5 text-center text-xs text-white" :class="stavSkladu">{{props.kosik.sklad}}</span>
    </div>
    <div class="ml-2 font-bold text-[#333399] truncate">{{ props.kosik.nazov }}</div>
    <div class="flex w-full items-start justify-start">
      <img :src="props.kosik.fotografiaMala" class="h-16 w-20 shrink-0 grow-0 object-contain object-center" />
      <div class="shrink grow ml-1">
        <div class="text-xs">[{{props.kosik.kodProduktu}}]</div>
      </div>
    </div>
    <div class="flex items-center justify-between px-1 mb-1">
      <span class="text-sm">Počet kusov:</span>
      <span class="text-lg font-bold">{{props.kosik.pocet}}ks</span>
    </div>
    <div class="flex items-center justify-between px-1">
      <span class="text-sm">Vaša cena s DPH:</span>
      <span class="text-lg font-bold">{{formatToTwoDecimals(props.kosik.cenaZaKus)}}&euro;</span>
    </div>

  </div>

</template>