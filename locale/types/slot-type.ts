import { SlotType } from "~/enums/slot-type";

export type LocaleSlotType = {
  values: Record<SlotType, string>;
  name: string;
};
