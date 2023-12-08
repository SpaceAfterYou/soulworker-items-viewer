import { GainType } from "~/enums/gain-type";

export type LocaleGainType = { values: Record<GainType, string>; name: string };

export const gainType = {
  values: {
    [GainType.Unknown_0]: `Unknown (${GainType.Unknown_0})`,
    [GainType.Unknown_1]: `Unknown (${GainType.Unknown_1})`,
    [GainType.Unknown_2]: `Unknown (${GainType.Unknown_2})`,
  },
  name: "Gain type",
} satisfies LocaleGainType;
