import { InventoryType } from "~/enums/inventory-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const inventoryType = {
  values: {
    [InventoryType.Unknown_13]: `Unknown`,
    [InventoryType.Unknown_14]: `Unknown`,
    [InventoryType.Unknown_19]: `Unknown`,
    [InventoryType.Unknown_0]: `Unknown`,
    [InventoryType.Unknown_2]: `Unknown`,
    [InventoryType.Unknown_9]: `Unknown`,
  },
  name: "Inventory type",
} satisfies LocaleSidebarType<InventoryType>;
