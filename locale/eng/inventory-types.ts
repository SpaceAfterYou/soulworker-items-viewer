import { InventoryType } from "~/enums/inventory-type";

export type LocaleInventoryType = {
  values: Record<InventoryType, string>;
  name: string;
};

export const inventoryType = {
  values: {
    [InventoryType.Unknown_13]: `Unknown (${InventoryType.Unknown_13})`,
    [InventoryType.Unknown_14]: `Unknown (${InventoryType.Unknown_14})`,
    [InventoryType.Unknown_19]: `Unknown (${InventoryType.Unknown_19})`,
    [InventoryType.Unknown_0]: `Unknown (${InventoryType.Unknown_0})`,
    [InventoryType.Unknown_2]: `Unknown (${InventoryType.Unknown_2})`,
    [InventoryType.Unknown_9]: `Unknown (${InventoryType.Unknown_9})`,
  },
  name: "Inventory type",
} satisfies LocaleInventoryType;
