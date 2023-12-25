import { GainType } from "~/enums/gain-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const gainType = {
  values: {
    [GainType.Unknown_0]: `未知`,
    [GainType.Unknown_1]: `未知`,
    [GainType.Unknown_2]: `未知`,
  },
  name: "Gain type",
} satisfies LocaleSidebarType<GainType>;
