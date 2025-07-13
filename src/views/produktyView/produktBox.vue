<script setup lang="ts">
import { type Produkty } from '../../types/types'
const props=defineProps<{produkt:Produkty}>()
const clickFunction=()=>{
  alert('Tu by sa zobrazil detail produktu')
}
</script>
<template>
  <figure @click="clickFunction()" class="relative w-full hover:cursor-pointer">
    <img :src="produkt.fotografiaMala" class="h-64 w-full object-cover" :alt="produkt.nazov" />
    <figcaption class="absolute bottom-0 left-0 right-0 flex h-12 items-center justify-center bg-gradient-to-b from-black/0 to-black/70 text-center text-lg text-white">{{produkt.nazov}}</figcaption>
    <div v-if="produkt.jeAkcia || produkt.novinka" class="absolute top-1 left-1">
      <figcaption v-if="produkt.jeAkcia" class="px-1 py-0.5 text-white bg-lime-500 text-center">AKCIA</figcaption>
      <figcaption v-if="produkt.novinka" class="px-1 py-0.5 text-white bg-red-700 mt-1 text-center">NOVINKA</figcaption>
    </div>

  </figure>
</template>