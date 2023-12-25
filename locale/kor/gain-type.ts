import { GainType } from "~/enums/gain-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const gainType = {
  values: {
    [GainType.Unknown_0]: `알 수 없음`,
    [GainType.Unknown_1]: `알 수 없음`,
    [GainType.Unknown_2]: `알 수 없음`,
  },
  name: "Gain type",
} satisfies LocaleSidebarType<GainType>;
