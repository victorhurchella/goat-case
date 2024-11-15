import {
  getRarityLabel,
  getStyleByRarity,
  SkinRarity,
} from "../../utils/rarities";

export default function ItemBox({
  icon,
  rarity,
  probability,
  infos,
}: {
  icon: any;
  rarity: SkinRarity;
  probability?: number;
  infos?: {
    title: string;
    item: string;
    value: number;
  };
}) {
  const boxStyle = getStyleByRarity(rarity);
  const rarityLabel = getRarityLabel(rarity);

  return (
    <div className={`flex justify-between p-6 rounded border ${boxStyle}`}>
      <div className="flex flex-col items-center relative">
        <img src={icon} alt="item-icon" />
        {probability && (
          <span className="uppercase font-light text-white/15 text-xs absolute top-20">
            {probability.toFixed(2)}% de chance
          </span>
        )}
      </div>

      {infos && (
        <div className="flex flex-col ml-6 justify-center">
          <div>
            <span className="font-bold text-white uppercase text-lg">
              {infos.title} -
            </span>
            <span className="font-bold text-white/30 text-lg ml-1">
              ~{infos.value}
            </span>
          </div>

          <div>
            <span className="font-bold text-white capitalize text-sm">
              {infos.item} -
            </span>
            <span className="font-light text-white/25 text-sm ml-1">
              {rarityLabel}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
