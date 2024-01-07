<script lang="ts" setup>
import { useSoundsContainers, useSoundsPackage } from "~/stores/sounds";

const { soundsContainers } = storeToRefs(useSoundsPackage());
const { selected } = storeToRefs(useSoundsContainers());
</script>

<template>
  <!-- key - package name -->
  <SidebarTitledBlock v-for="(soundsContainer, key) in soundsContainers" :key="key">
    <template #head>
      {{ key }}
    </template>

    <template #body>
      <button v-for="name of soundsContainer" @click="selected = name" type="button" :key="name">
        {{ name }}
      </button>
    </template>
  </SidebarTitledBlock>
</template>
