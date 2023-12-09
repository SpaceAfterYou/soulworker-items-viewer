import type { LocaleInventoryType } from "./inventory-type";
import type { LocaleGainType } from "./gain-type";
import type { LocaleSlotType } from "./slot-type";
import type { Header } from "./header";

export type Locale = {
  inventoryType: LocaleInventoryType;
  items: Record<string, object> | {};
  slotType: LocaleSlotType;
  gainType: LocaleGainType;
  header: Header;
};
