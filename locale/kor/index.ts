import type { Locale } from "../types/locale";

import { inventoryType } from "./inventory-types";
import { gainType } from "./gain-type";
import { slotType } from "./slot-type";
import { header } from "./header";
import items from "./items.json";

export const kor = {
  inventoryType,
  slotType,
  gainType,
  header,
  items,
} satisfies Locale;
