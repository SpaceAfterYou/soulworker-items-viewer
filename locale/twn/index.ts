import { inventoryType } from "./inventory-types";
import { makeLocale } from "../types/make";
import { gainType } from "./gain-type";
import { slotType } from "./slot-type";
import { header } from "./header";
import items from "./items.json";

export const twn = makeLocale({
  inventoryType,
  slotType,
  gainType,
  header,
  items,
});
