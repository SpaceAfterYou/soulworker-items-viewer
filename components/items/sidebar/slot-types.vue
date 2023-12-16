<script lang="ts" setup>
import { useSlotTypes } from "@/stores/slot-types";

const { selectedSlotTypes, slotTypes } = storeToRefs(useSlotTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock
      :selected="selectedSlotTypes"
      :values="slotTypes"
      token="slotType"
    />
  </div>
</template>
