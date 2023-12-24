import { SlotType } from "~/enums/slot-type";

import type { LocaleSidebarType } from "../types/sidebar-type";

export const slotType = {
  values: {
    [SlotType.FashionBottomSpine]: `Fashion (bottom spine)`,
    [SlotType.FashionBottomBody]: `Fashion (bottom body)`,
    [SlotType.FashionFaceBottom]: `Fashion (face bottom)`,
    [SlotType.FashionStockings]: `Fashion (stockings)`,
    [SlotType.FashionTopSpine]: `Fashion (top spine)`,
    [SlotType.FashionTopBody]: `Fashion (top body)`,
    [SlotType.FashionFaceTop]: `Fashion (face top)`,
    [SlotType.FashionPanties]: `Fashion (panties)`,
    [SlotType.FashionWeapon]: `Weapon (fashion)`,
    [SlotType.FashionEffect]: `Effect (fashion)`,
    [SlotType.FashionHands]: `Fashion (hands)`,
    [SlotType.FashionShoes]: `Fashion (shoes)`,
    [SlotType.GearEarrings]: `Earrings (gear)`,
    [SlotType.Unknown_161]: `Shouldes (gear)`,
    [SlotType.FashionHead]: `Head (fashion)`,
    [SlotType.FashionEars]: `Ears (fashion)`,
    [SlotType.GearWeapon]: `Weapon (gear)`,
    [SlotType.GearAmulet]: `Amulet (gear)`,
    [SlotType.GearLegs]: `Legs (gear)`,
    [SlotType.GearBody]: `Body (gear)`,
    [SlotType.GearHead]: `Head (gear)`,
    [SlotType.GearRing]: `Ring (gear)`,
    [SlotType.Unknown_101]: `Unknown`,
    [SlotType.Unknown_102]: `Unknown`,
    [SlotType.Unknown_103]: `Unknown`,
    [SlotType.Unknown_104]: `Unknown`,
    [SlotType.Unknown_105]: `Unknown`,
    [SlotType.Unknown_106]: `Unknown`,
    [SlotType.Unknown_107]: `Unknown`,
    [SlotType.Unknown_108]: `Unknown`,
    [SlotType.Unknown_109]: `Unknown`,
    [SlotType.Unknown_110]: `Unknown`,
    [SlotType.Unknown_191]: `Unknown`,
    [SlotType.Unknown_200]: `Unknown`,
    [SlotType.Unknown_210]: `Unknown`,
    [SlotType.Unknown_211]: `Unknown`,
    [SlotType.Unknown_220]: `Unknown`,
    [SlotType.Unknown_221]: `Unknown`,
    [SlotType.Unknown_222]: `Unknown`,
    [SlotType.Unknown_223]: `Unknown`,
    [SlotType.Unknown_240]: `Unknown`,
    [SlotType.Unknown_241]: `Unknown`,
    [SlotType.Unknown_242]: `Unknown`,
    [SlotType.Unknown_243]: `Unknown`,
    [SlotType.Unknown_251]: `Unknown`,
    [SlotType.Unknown_252]: `Unknown`,
    [SlotType.Unknown_253]: `Unknown`,
    [SlotType.Unknown_254]: `Unknown`,
    [SlotType.Unknown_255]: `Unknown`,
    [SlotType.Unknown_97]: `Unknown`,
    [SlotType.Unknown_98]: `Unknown`,
    [SlotType.Unknown_99]: `Unknown`,
    [SlotType.Unknown_2]: `Unknown`,
    [SlotType.Unknown_0]: `Common`,
    [SlotType.Akashic]: `Akashic`,
  },
  name: "Slot type",
} satisfies LocaleSidebarType<SlotType>;
