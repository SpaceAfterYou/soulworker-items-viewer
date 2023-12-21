import type { InventoryType } from "~/enums/inventory-type";
import type { GainType } from "~/enums/gain-type";
import type { SlotType } from "~/enums/slot-type";

import type { LocaleSidebarType } from "./sidebar-type";
import type { Header } from "./header";

export type Locale = {
  inventoryType: LocaleSidebarType<InventoryType>;
  gainType: LocaleSidebarType<GainType>;
  slotType: LocaleSidebarType<SlotType>;
  items: Record<string, object> | {};
  header: Header;
};
