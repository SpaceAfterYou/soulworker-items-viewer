<script lang="ts" setup>
import { useGainTypes } from "@/stores/gain-types";

const { selectedGainTypes, gainTypes } = storeToRefs(useGainTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock
      :selected="selectedGainTypes"
      :values="gainTypes"
      token="gainType"
    />
  </div>
</template>
