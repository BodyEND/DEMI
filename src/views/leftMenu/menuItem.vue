<script setup lang="ts">
import { useRoute } from 'vue-router';
const route=useRoute()

const props=defineProps<{link:string,text:string}>()

function isAktivneMenu(link:string): string {
  if (typeof route.name === 'string') {
     if(route.name === link){
      return 'bg-gray-300'
     }
  }
  return 'bg-gray-200 hover:bg-gray-300'
}

</script>
<template>
  <li>
    <RouterLink :to="{name:props.link}" class="flex items-center p-2 text-gray-900 rounded-lg  group" :class="isAktivneMenu(props.link)">
      <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
      </svg>
      <span class="flex-1 ms-3 whitespace-nowrap">{{ props.text }}</span>
    </RouterLink>
</li>
</template>