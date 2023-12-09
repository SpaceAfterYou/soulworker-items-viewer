import { GainType } from "~/enums/gain-type";

import type { LocaleGainType } from "../types/gain-type";

export const gainType = {
  values: {
    [GainType.Unknown_0]: `未知 (${GainType.Unknown_0})`,
    [GainType.Unknown_1]: `未知 (${GainType.Unknown_1})`,
    [GainType.Unknown_2]: `未知 (${GainType.Unknown_2})`,
  },
  name: "Gain type",
} satisfies LocaleGainType;
