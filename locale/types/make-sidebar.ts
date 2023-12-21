import type { LocaleSidebarType } from "./sidebar-type";

export const makeSideBarLocale = <T extends number>(locale: LocaleSidebarType<T>) => ({
  values: Object.fromEntries(
    Object.entries(locale.values).map(([key, value]) => {
      return [key, `${value}`];
    })
  ),
  name: locale.name,
});
