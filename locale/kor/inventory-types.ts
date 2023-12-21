import { InventoryType } from "~/enums/inventory-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const inventoryType = {
  values: {
    [InventoryType.Unknown_13]: `알 수 없음`,
    [InventoryType.Unknown_14]: `알 수 없음`,
    [InventoryType.Unknown_19]: `알 수 없음`,
    [InventoryType.Unknown_0]: `알 수 없음`,
    [InventoryType.Unknown_2]: `알 수 없음`,
    [InventoryType.Unknown_9]: `알 수 없음`,
  },
  name: "Inventory type",
} satisfies LocaleSidebarType<InventoryType>;
