<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav class="text-black h-16 w-fullflex justify-center items-center p-4">
    <div class="w-4/5 mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center space-x-1">
        <Icon class="w-12 h-12" icon="ion:book-outline" color="#d946ef" />
        <h1 class="hidden text-fuchsia-500 md:block">Quote</h1>
      </a>

      <div class="relative md:hidden">
        <button class="hover:ring-2 hover:rounded hover:ring-fuchsia-500">
          <Icon
            class="w-9 h-9"
            icon="heroicons-solid:menu-alt-2"
            color="#d946ef"
          />
        </button>
        <div class="absolute -bottom-18 right-0 z-10">
          <ul class="text-base ring-2 ring-fuchsia-500 rounded p-2 space-y-2">
            <li class="w-25 hover:underline decoration-2 text-fuchsia-500">
              <a href="/">Add a quote</a>
            </li>
            <li class="w-25 hover:underline decoration-2 text-fuchsia-500">
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
