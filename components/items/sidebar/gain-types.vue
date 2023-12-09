<script lang="ts" setup>
import { useGainTypes } from "@/stores/gain-types";

const { selectedGainTypes, gainTypes } = storeToRefs(useGainTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock
      :selected="selectedGainTypes"
      locale-path="gainType"
      :values="gainTypes"
    />
  </div>
</template>
