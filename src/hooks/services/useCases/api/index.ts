import { SkinRarity } from "../../../../utils/rarities";

// mocked api response
export function getCase() {
  const { data } = {
    data: {
      id: "0ed4e256-dd6c-4020-8a9f-978639ca9697",
      name: "Caixa GOAT",
      description: "Itens especiais com um toque GOAT de SER.",
      skins: [
        {
          name: "Capuz Natalino",
          rarity: SkinRarity.Exotic,
          probability: 0.01,
        },
        {
          name: "Karambit Radiação",
          rarity: SkinRarity.Mythic,
          probability: 0.01,
        },
        {
          name: "M4A4 Japonesa",
          rarity: SkinRarity.Mythic,
          probability: 0.01,
        },
        {
          name: "G36C Caveira",
          rarity: SkinRarity.Legendary,
          probability: 0.04,
        },
        {
          name: "Colete Arco-Íris",
          rarity: SkinRarity.Legendary,
          probability: 0.04,
        },
        {
          name: "Jaqueta Corta Vento Capuz Caveira",
          rarity: SkinRarity.Epic,
          probability: 0.1,
        },
        {
          name: "Calça Giz",
          rarity: SkinRarity.Epic,
          probability: 0.1,
        },
        {
          name: "Calça Terno 1 Win",
          rarity: SkinRarity.Epic,
          probability: 0.1,
        },
        {
          name: "Calça Esqueleto",
          rarity: SkinRarity.Epic,
          probability: 0.1,
        },
        {
          name: "Camisa Esqueleto",
          rarity: SkinRarity.Rare,
          probability: 0.25,
        },
        {
          name: "TEC9 Flamejante",
          rarity: SkinRarity.Rare,
          probability: 0.25,
        },
        {
          name: "Micro Uzi Kitsune",
          rarity: SkinRarity.Rare,
          probability: 0.25,
        },
        {
          name: "Calça Cabra",
          rarity: SkinRarity.Uncommon,
          probability: 0.6,
        },
        {
          name: "Abadá CarnaGOAT",
          rarity: SkinRarity.Uncommon,
          probability: 0.6,
        },
        {
          name: "Saia Floral",
          rarity: SkinRarity.Uncommon,
          probability: 0.6,
        },
        {
          name: "Bandana Cabra",
          rarity: SkinRarity.Common,
          probability: 0.6,
        },
        {
          name: "Meia Japonesa",
          rarity: SkinRarity.Common,
          probability: 0.6,
        },
        {
          name: "FN Five-Seven Xeque-Mate",
          rarity: SkinRarity.Common,
          probability: 0.6,
        },
      ],
    },
  };

  return data;
}
