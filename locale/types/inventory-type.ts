import type { InventoryType } from "~/enums/inventory-type";

export type LocaleInventoryType = {
  values: Record<InventoryType, string>;
  name: string;
};
