<script setup lang="ts">
import { useGeneralDataStore } from '@/stores/generalDataStore';
import { type Uzivatel } from '@/types/types';
import {ref, onBeforeMount} from 'vue'
const generalDataStore=useGeneralDataStore()

const uzivatel=ref<Uzivatel>(generalDataStore.defaultUzivatel)

onBeforeMount(()=>{
  uzivatel.value=JSON.parse(JSON.stringify(generalDataStore.uzivatel))
})

const submitFormular=()=>{
  alert('sem by siel kod na backend')
}

// id: number
//   spolocnost:string
//   ulica: string
//   mesto: string
//   psc: string
//   ico: string
//   dic: string,
//   icdph: string,
//   email: string
</script>
<template>
<div class="p-4 sm:ml-64 ">
  <form @submit.prevent="submitFormular">
  <div class="mb-2" style="max-width:340px;">
    <label for="exampleFormControlInput1" class="block mb-2 text-sky-800 font-medium">Spoločnosť</label>
    <input
        type="text"
        name="spolocnost"
        minlength="2"
        v-model="uzivatel.spolocnost"
        required
        id="exampleFormControlInput1"
        placeholder="Spoločnosť"
        class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"/>
  </div>
  <div class="mb-2" style="max-width:340px;">
    <label for="exampleFormControlInput2" class="block mb-2 text-sky-800 font-medium">Ulica</label>
    <input
        type="text"
        name="mesto"
        minlength="2"
        v-model="uzivatel.ulica"
        required
        id="exampleFormControlInput2"
        placeholder="Ulica"
        class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"/>
  </div>
  <div class="mb-2" style="max-width:340px;">
    <label for="exampleFormControlInput3" class="block mb-2 text-sky-800 font-medium">Mesto</label>
    <input
        type="text"
        name="ulica"
        minlength="2"
        v-model="uzivatel.mesto"
        required
        id="exampleFormControlInput3"
        placeholder="Mesto"
        class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"/>
  </div>
  <div class="mb-2" style="max-width:340px;">
    <label for="exampleFormControlInput3" class="block mb-2 text-sky-800 font-medium">PSČ</label>
    <input
        type="text"
        name="ulica"
        minlength="2"
        v-model="uzivatel.psc"
        required
        id="exampleFormControlInput3"
        placeholder="PSČ"
        class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"/>
  </div>
  <div class="mb-2" style="max-width:340px;">
    <label for="exampleFormControlInput3" class="block mb-2 text-sky-800 font-medium">IČO</label>
    <input
        type="text"
        name="ulica"
        minlength="2"
        v-model="uzivatel.ico"
        required
        id="exampleFormControlInput3"
        placeholder="IČO"
        class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"/>
  </div>
  <div class="mb-2" style="max-width:340px;">
    <label for="exampleFormControlInput3" class="block mb-2 text-sky-800 font-medium">DIČ</label>
    <input
        type="text"
        name="ulica"
        minlength="2"
        v-model="uzivatel.dic"
        required
        id="exampleFormControlInput3"
        placeholder="DIČ"
        class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"/>
  </div>
  <div class="mb-6"><button type="submit" class="bg-sky-800 hover:bg-sky-600 text-white py-3 text-lg px-4 rounded-md"> Upraviť údaje </button></div>

  </form>

</div>

</template>