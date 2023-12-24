<script lang="ts" setup>
import { useGainTypes } from "@/stores/gain-types";

const { gainTypes } = storeToRefs(useGainTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock :values="gainTypes" token="gainType" />
  </div>
</template>
