import { InventoryType } from "~/enums/inventory-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const inventoryType = {
  values: {
    [InventoryType.Unknown_13]: `未知`,
    [InventoryType.Unknown_14]: `未知`,
    [InventoryType.Unknown_19]: `未知`,
    [InventoryType.Unknown_0]: `未知`,
    [InventoryType.Unknown_2]: `未知`,
    [InventoryType.Unknown_9]: `未知`,
  },
  name: "Inventory type",
} satisfies LocaleSidebarType<InventoryType>;
