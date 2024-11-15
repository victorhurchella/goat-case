import { SkinRarity } from "../../../utils/rarities";

export interface Skin {
  name: string;
  rarity: SkinRarity;
  probability: number;
}

export interface Case {
  id: string;
  name: string;
  description: string;
  skins: Skin[];
}
