import type { Locale } from "../types/locale";

import { header } from "./header";
import items from "./items.json";

export const kor = {
  header,
  items,
} satisfies Locale;
