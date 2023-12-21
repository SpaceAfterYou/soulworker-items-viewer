import { InventoryType } from "~/enums/inventory-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const inventoryType = {
  values: {
    [InventoryType.Extra]: `未知`,
    [InventoryType.Unknown_14]: `未知`,
    [InventoryType.Unknown_19]: `未知`,
    [InventoryType.Home]: `未知`,
    [InventoryType.Fashion]: `未知`,
    [InventoryType.Common]: `未知`,
  },
  name: "Inventory type",
} satisfies LocaleSidebarType<InventoryType>;
