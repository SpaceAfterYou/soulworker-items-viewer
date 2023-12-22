import { InventoryType } from "~/enums/inventory-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const inventoryType = {
  values: {
    [InventoryType.Unknown_14]: `알 수 없음`,
    [InventoryType.Unknown_19]: `알 수 없음`,
    [InventoryType.Fashion]: `알 수 없음`,
    [InventoryType.Common]: `알 수 없음`,
    [InventoryType.Extra]: `알 수 없음`,
    [InventoryType.Home]: `알 수 없음`,
  },
  name: "Inventory type",
} satisfies LocaleSidebarType<InventoryType>;
