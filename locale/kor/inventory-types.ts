import { InventoryType } from "~/enums/inventory-type";

import type { LocaleInventoryType } from "../types/inventory-type";

export const inventoryType = {
  values: {
    [InventoryType.Unknown_13]: `알 수 없음 (${InventoryType.Unknown_13})`,
    [InventoryType.Unknown_14]: `알 수 없음 (${InventoryType.Unknown_14})`,
    [InventoryType.Unknown_19]: `알 수 없음 (${InventoryType.Unknown_19})`,
    [InventoryType.Unknown_0]: `알 수 없음 (${InventoryType.Unknown_0})`,
    [InventoryType.Unknown_2]: `알 수 없음 (${InventoryType.Unknown_2})`,
    [InventoryType.Unknown_9]: `알 수 없음 (${InventoryType.Unknown_9})`,
  },
  name: "Inventory type",
} satisfies LocaleInventoryType;
