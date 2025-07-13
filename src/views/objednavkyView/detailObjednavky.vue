<script setup lang="ts">
import {ref} from 'vue'
import boxSProduktom from './boxSProduktom.vue'

import { type Objednavky } from '../../types/types'

const ukazDetail=ref<boolean>(false)

const formatToTwoDecimals = (value: number | string): string => {
  return parseFloat(value as string).toFixed(2);
};


const props=defineProps<{objednavka:Objednavky}>()

</script>
<template>
  <div class="bg-white p-2 shadow-lg mb-2">
      <div @click="ukazDetail=!ukazDetail" :title="ukazDetail?'Skry objednávku':'Zobraz objednávku'" class="flex justify-start items-start hover:cursor-pointer group">
        <div class="flex flex-wrap justify-start sm:w-auto">
          <div class="mr-2 sm:mr-10">
            <span class="text-xs block">Číslo objednávky:</span>
            <span class="font-bold text-lg">#{{props.objednavka.id}}</span>
          </div>
          <div class="mr-2 sm:mr-10">
            <span class="text-xs block">Dátum objednávky:</span>
            <span class="font-bold truncate text-xs sm:text-base">{{props.objednavka.datum}}</span>
          </div>
        </div>
        <div class="flex flex-wrap justify-start sm:w-auto">
          <div class="mr-2 sm:mr-10">
            <span class="text-xs block">Spolu bez DPH:</span>
            <span class="font-bold text-[#333399]">{{formatToTwoDecimals(props.objednavka.sumaBezDPH)}}&euro;</span>
          </div>
          <div class="mr-2 sm:mr-10">
            <span class="text-xs block">Spolu s DPH:</span>
            <span class="font-bold text-[#333399]">{{formatToTwoDecimals(props.objednavka.sumaSDPH)}}&euro;</span>
          </div>
        </div>
        <span class="self-center ml-auto">
          <svg class="h-8 w-8 text-[#333399] duration-200" :class="[ukazDetail?'rotate-90':'']"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
        </span>
      </div>
      <template v-if="ukazDetail">
        <div>
          <span class="text-xs block">Poznámka:</span>
          <span class="font-bold text-sm">{{props.objednavka.poznamka}}</span>
        </div>
        <div class="grid gap-2 grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 flex-wrap">
          <template v-for="kosik in props.objednavka.kosik" :key="`kosik-box-${kosik.kodProduktu}`">
            <boxSProduktom :kosik="kosik"></boxSProduktom>
          </template>
        </div>
        <div class="flex flex-wrap md:flex-nowrap justify-between mt-10 mb-4">
          <div class="w-full md:w-1/2">
            <div class="flex w-full items-center justify-start border-b border-gray-200 p-2">
              <template v-if="props.objednavka.platba=='Hotovosť'">
                <span class="text-[#333399] font-bold text-lg">Hotovosť</span>
                <span class="text-lg ml-auto">0.00&euro;</span>
              </template>
              <template v-if="props.objednavka.platba=='Príkazom na faktúru'">
                <span class="text-[#333399] font-bold text-lg">Príkazom na faktúru</span>
                <span class="text-lg ml-auto">0.00&euro;</span>
              </template>
              <template v-if="props.objednavka.platba=='Zálohou'">
                <span class="text-[#333399] font-bold text-lg">Zálohou</span>
                <span class="text-lg ml-auto">0.00&euro;</span>
              </template>
            </div>
            <div class="flex w-full items-center justify-start border-b border-gray-200 p-2">
                <template v-if="props.objednavka.doprava=='Doručenie na adresu'">
                  <div class=" text-lg flex flex-col">
                    <span class="text-[#333399] font-bold block">Doručenie na adresu</span>
                    <p class="break-words text-xs sm:text-base" :title="props.objednavka.adresa">props.objednavka.adresa</p>
                    </div>
                  <span class="text-lg ml-auto">0.00&euro;</span>
                </template>
                <template v-if="props.objednavka.doprava=='Doručenie na adresu kuriér'">
                  <div class=" text-lg flex flex-col">
                    <span class="text-[#333399] font-bold block">Doručenie na adresu kuriér</span>
                    <p class="break-words text-xs sm:text-base" :title="props.objednavka.adresa">props.objednavka.adresa</p>
                    </div>
                  <span class="text-lg ml-auto">0.00&euro;</span>
                </template>
                <template v-if="props.objednavka.doprava=='Osobný odber'">
                  <div class=" text-lg flex flex-col">
                    <span class="text-[#333399] font-bold block">Osobný odber</span>
                    <p class="break-words text-xs sm:text-base" :title="props.objednavka.adresa">props.objednavka.adresa</p>
                    </div>
                  <span class="text-lg ml-auto">0.00&euro;</span>
                </template>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="ml-0 md:ml-5 bg-gray-100 p-2">
              <div class="flex justify-between text-base sm:text-lg">
                <span>Cena spolu bez DPH</span>
                <span>{{formatToTwoDecimals(props.objednavka.sumaBezDPH)}}&euro;</span>
              </div>
              <div class="flex justify-between text-base sm:text-xl font-bold mt-2">
                <span>Cena spolu s DPH</span>
                <span>{{formatToTwoDecimals(props.objednavka.sumaSDPH)}}&euro;</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

</template>