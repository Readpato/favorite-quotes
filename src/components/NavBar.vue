<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isModalVisible = ref(false);

function toggleModal() {
  isModalVisible.value = !isModalVisible.value;
}
</script>

<template>
  <nav
    data-cy="nav-bar"
    class="flex h-20 w-full items-center justify-center p-5 text-black md:p-5"
  >
    <div class="mx-auto flex w-4/5 items-center justify-between">
      <a
        data-cy="logo"
        href="/"
        class="flex items-center justify-center space-x-1"
      >
        <Icon class="h-12 w-12" icon="ion:book-outline" color="#d946ef" />
        <h1
          class="hidden font-thin text-fuchsia-500 md:block md:text-2xl lg:text-3xl xl:text-4xl"
        >
          Quote
        </h1>
      </a>
      <ul
        data-cy="nav-links-lg"
        class="hidden md:flex md:items-center md:justify-between md:space-x-5 md:text-base"
      >
        <li class="text-fuchsia-500 decoration-2 hover:underline md:text-lg">
          <a href="/">Add a quote</a>
        </li>
        <li class="text-fuchsia-500 decoration-2 hover:underline md:text-lg">
          <a href="/">About</a>
        </li>
      </ul>
      <div data-cy="nav-links-button" class="relative md:hidden">
        <button
          class="hover:rounded hover:ring-2 hover:ring-fuchsia-500"
          @click="toggleModal"
        >
          <Icon
            class="h-9 w-9"
            icon="heroicons-solid:menu-alt-2"
            color="#d946ef"
          />
        </button>
        <div
          v-if="isModalVisible"
          data-cy="nav-links-mobile"
          class="absolute -bottom-18 right-0 z-10"
        >
          <ul class="space-y-2 rounded p-2 text-base ring-2 ring-fuchsia-500">
            <li class="w-25 text-fuchsia-500 decoration-2 hover:underline">
              <a href="/">Add a quote</a>
            </li>
            <li class="w-25 text-fuchsia-500 decoration-2 hover:underline">
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
