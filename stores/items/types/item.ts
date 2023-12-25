import type { InventoryType } from "~/enums/inventory-type";
import type { GainType } from "~/enums/gain-type";
import type { SlotType } from "~/enums/slot-type";

export type Item = {
  inventoryType: InventoryType;
  slotType: SlotType;
  gainType: GainType;
  class: number;
  icon: string;
  id: string;
};
