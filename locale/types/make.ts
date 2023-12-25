import type { Locale } from "./locale";

import { makeSideBarLocale } from "./make-sidebar";

export const makeLocale = (locale: Locale) => ({
  inventoryType: makeSideBarLocale(locale.inventoryType),
  gainType: makeSideBarLocale(locale.gainType),
  slotType: makeSideBarLocale(locale.slotType),
  header: locale.header,
  items: locale.items,
});
