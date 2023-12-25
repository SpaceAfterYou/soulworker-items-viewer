<script lang="ts" setup>
import { useInventoryTypes } from "@/stores/inventory-types";

const { inventoryType } = storeToRefs(useInventoryTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock :values="inventoryType" token="inventoryType" />
  </div>
</template>
