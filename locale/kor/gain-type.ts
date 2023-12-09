import { GainType } from "~/enums/gain-type";

import type { LocaleGainType } from "../types/gain-type";

export const gainType = {
  values: {
    [GainType.Unknown_0]: `알 수 없음 (${GainType.Unknown_0})`,
    [GainType.Unknown_1]: `알 수 없음 (${GainType.Unknown_1})`,
    [GainType.Unknown_2]: `알 수 없음 (${GainType.Unknown_2})`,
  },
  name: "Gain type",
} satisfies LocaleGainType;
