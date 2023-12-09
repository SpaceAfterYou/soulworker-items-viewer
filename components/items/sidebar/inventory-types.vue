<script lang="ts" setup>
import { useInventoryTypes } from "@/stores/inventory-types";

const { selectedInventoryTypes, inventoryType } =
  storeToRefs(useInventoryTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock
      :selected="selectedInventoryTypes"
      locale-path="inventoryType"
      :values="inventoryType"
    />
  </div>
</template>
