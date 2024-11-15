export enum SkinRarity {
  Uncommon = "Uncommon",
  Common = "Common",
  Rare = "Rare",
  Epic = "Epic",
  Legendary = "Legendary",
  Mythic = "Mythic",
  Exotic = "Exotic",
}

const rarities = {
  [SkinRarity.Exotic]: {
    label: "Exótico",
    style: "border-exotic bg-exotic-lg shadow-[0_0_15px_0] shadow-exotic",
  },
  [SkinRarity.Mythic]: {
    label: "Mítico",
    style: "border-mythic bg-mythic-lg",
  },
  [SkinRarity.Legendary]: {
    label: "Lendário",
    style: "border-legendary bg-legendary-lg",
  },
  [SkinRarity.Epic]: {
    label: "Épico",
    style: "border-epic bg-epic-lg",
  },
  [SkinRarity.Rare]: {
    label: "Raro",
    style: "border-rare bg-rare-lg",
  },
  [SkinRarity.Uncommon]: {
    label: "Incomum",
    style: "border-uncommon bg-uncommon-lg",
  },
  [SkinRarity.Common]: {
    label: "Comum",
    style: "border-common bg-common-lg",
  },
};

export function getRarities() {
  return rarities;
}

export function getRarityLabel(rarity: SkinRarity) {
  return rarities[rarity].label;
}

export function getStyleByRarity(rarity: SkinRarity) {
  return rarities[rarity].style;
}
