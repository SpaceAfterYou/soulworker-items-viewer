import { GainType } from "~/enums/gain-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const gainType = {
  values: {
    [GainType.Unknown_0]: `Unknown`,
    [GainType.Unknown_1]: `Unknown`,
    [GainType.Unknown_2]: `Unknown`,
  },
  name: "Gain type",
} satisfies LocaleSidebarType<GainType>;
