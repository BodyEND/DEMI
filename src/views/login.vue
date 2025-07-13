<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/use/login'
import { useRouter } from 'vue-router'
// import { validateEmail } from '@/use/generalFunctions'
import { useGeneralDataStore } from '@/stores/generalDataStore'
import axios from 'axios'

const generalDataStore = useGeneralDataStore()

const router = useRouter()

const email=ref<string>('test@test.sk')
const password=ref<string>('123')


function loginStandardForm() {
  if (generalDataStore.uzivatelPrihlaseny) {
    //----ak uz je prihlaseny uzivatel ho odhlasime pred spracovanim formulara
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('Dtoken')
    generalDataStore.uzivatelPrihlaseny = false
    return
  }
  password.value = password.value.toString().trim()
  login(email.value,password.value,router)
}
</script>
<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 bg-gradient-to-br from-sky-50 to-sky-200"
  >
    <div
      class="relative bg-white px-6 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    >
      <div class="mx-auto w-80">
        <div class="divide-y divide-gray-300/50">
          <form>
            <div class="py-4 text-base leading-7 text-gray-600">
            <div class="w-full text-center text-xl font-bold py-4 text-sky-700">
                Prihlásenie
            </div>
            </div>
            <div class="mb-6">
                <label
                    for="exampleFormControlInput2"
                    class="block mb-2 text-sky-800 font-medium"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    v-model="email"
                    required
                    id="exampleFormControlInput2"
                    placeholder="Email"
                    class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"
                />
                </div>


            <!-- Password input -->
            <div class="mb-6">
                <label
                    for="exampleFormControlInput22"
                    class="block mb-2 text-sky-800 font-medium"
                >
                    Heslo
                </label>
                <input
                    type="password"
                    name="password"
                    minlength="5"
                    autocomplete="current-password"
                    v-model="password"
                    required
                    id="exampleFormControlInput22"
                    placeholder="Heslo"
                    class="block w-full rounded border border-sky-600 bg-transparent px-3 py-2 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"
                />
                </div>

            <div class="mb-6">
              <button
                @click.prevent="loginStandardForm()"
                type="submit"
                class="bg-sky-800 hover:bg-sky-600 text-white py-3 text-lg px-4 rounded-md"
              >
                Prihlásiť sa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
