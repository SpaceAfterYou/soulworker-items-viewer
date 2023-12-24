<script lang="ts" setup>
import { useSlotTypes } from "@/stores/slot-types";

const { slotTypes } = storeToRefs(useSlotTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock :values="slotTypes" token="slotType" />
  </div>

  <!-- https://youtu.be/JiQ4pU8Xm-c -->
</template>
