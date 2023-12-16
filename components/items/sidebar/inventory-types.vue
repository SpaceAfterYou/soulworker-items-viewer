<script lang="ts" setup>
import { useInventoryTypes } from "@/stores/inventory-types";

const { selectedInventoryTypes, inventoryType } =
  storeToRefs(useInventoryTypes());
</script>

<template>
  <div>
    <ItemsSidebarTogglableBlock
      :selected="selectedInventoryTypes"
      :values="inventoryType"
      token="inventoryType"
    />
  </div>
</template>
