<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

let isModalShown = ref(false);
const toggleModal = () => {
  isModalShown.value = !isModalShown.value;
};
</script>

<template>
  <nav class="text-white h-24 w-full flex justify-center items-center p-4">
    <div class="w-3/4 md:w-3/5 mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center space-x-1">
        <Icon class="w-12 h-12" icon="pepicons:book" color="white" />
        <h1 class="hidden md:block md:text-xl">Quotes</h1>
      </a>

      <ul class="hidden md:flex md:text-base md:space-x-4">
        <li class="w-fit hover:underline decoration-2">
          <a href="/">Add a quote</a>
        </li>
        <li class="w-fit hover:underline decoration-2">
          <a href="/">About</a>
        </li>
      </ul>

      <div class="relative md:hidden" @click="toggleModal">
        <button
          class="hover:ring-2 hover:rounded hover:ring-white flex justify-center items-center"
        >
          <Icon
            class="w-9 h-9"
            icon="heroicons-solid:menu-alt-2"
            color="white"
          />
        </button>
        <div
          v-if="isModalShown"
          class="absolute -bottom-18 right-0 z-10 bg-black"
        >
          <ul class="text-base ring-2 ring-white rounded p-2 space-y-2">
            <li class="w-25 hover:underline decoration-2">
              <a href="/">Add a quote</a>
            </li>
            <li class="w-25 hover:underline decoration-2">
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
