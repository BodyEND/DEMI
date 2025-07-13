<script setup lang="ts">
import { useGeneralDataStore } from '@/stores/generalDataStore';

const generalDataStore=useGeneralDataStore()
const props=defineProps<{page:number,maxPages:number}>()

const emits=defineEmits<{
  (event:'page-change',num:number):number
}>()


</script>
<template>
  <div class="flex justify-center space-x-1 mx-2 items-stretch  select-none my-2">
    <div class="bg-white text-blue-900 rounded-md mr-4 text-lg p-1.5 items-center user-select-none" :title="`Stánka ${props.page} z ${maxPages}`">
      {{ props.page }}/{{
        props.maxPages
      }}
    </div>
    <template v-if="props.page > 1">
      <button
        @click.prevent="emits('page-change',props.page-1)"
        class="bg-white text-blue-900 hover:text-white hover:bg-blue-900 rounded-md" title="Predchádzajúca stránka">
      <svg class="w-10 h-10"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="8" y1="12" x2="16" y2="12" />  <line x1="8" y1="12" x2="12" y2="16" />  <line x1="8" y1="12" x2="12" y2="8" /></svg>
      </button>
    </template>
    <template v-else>
      <button disabled class="bg-gray-400 text-gray-800 rounded-md disabled:opacity-20">
        <svg class="w-10 h-10 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="8" y1="12" x2="16" y2="12" />  <line x1="8" y1="12" x2="12" y2="16" />  <line x1="8" y1="12" x2="12" y2="8" /></svg>
      </button>
    </template>
    <template
      v-if="props.maxPages > props.page"
    >
      <button
        @click.prevent="emits('page-change',props.page+1)"
        class="bg-white text-blue-900 hover:text-white hover:bg-blue-900 rounded-md" title="Ďalšia stránka"
      >
      <svg class="w-10 h-10"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
      </button>
    </template>
    <template v-else>
      <button disabled class="bg-gray-400 text-gray-800 rounded-md disabled:opacity-20">
        <svg class="w-10 h-10 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
      </button>
    </template>
  </div>

</template>