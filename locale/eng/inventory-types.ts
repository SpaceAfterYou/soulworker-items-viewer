import { InventoryType } from "~/enums/inventory-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const inventoryType = {
  values: {
    [InventoryType.SoulMate]: `Soul Mate`,
    [InventoryType.Unknown_19]: `Unknown`,
    [InventoryType.Fashion]: `Fashion`,
    [InventoryType.Common]: `Common`,
    [InventoryType.Extra]: `Extra`,
    [InventoryType.Home]: `Home`,
  },
  name: "Inventory type",
} satisfies LocaleSidebarType<InventoryType>;
