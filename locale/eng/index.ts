import { type Locale, makeLocale } from "../types/make";
import { inventoryType } from "./inventory-types";
import { gainType } from "./gain-type";
import { slotType } from "./slot-type";
import { header } from "./header";
import items from "./items.json";

export const eng = makeLocale({
  inventoryType,
  slotType,
  gainType,
  header,
  items,
} satisfies Locale);
