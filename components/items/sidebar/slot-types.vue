<script lang="ts" setup>
import { useSlotTypes } from "@/stores/slot-types";

const { selectedSlotTypes, slotTypes } = storeToRefs(useSlotTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock
      :selected="selectedSlotTypes"
      locale-path="slotType"
      :values="slotTypes"
    />
  </div>
</template>
