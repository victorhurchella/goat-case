import { motion } from "framer-motion";
import { getRarities } from "../../utils/rarities";

export default function RarityIndex() {
  const rarities = getRarities();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-row justify-center pt-14"
    >
      {Object.values(rarities).map((rarity) => (
        <div
          className="flex flex-row items-center justify-center mr-5"
          key={rarity.label}
        >
          <div className={`w-5 h-5 mr-1.5 rounded border ${rarity.style}`} />

          <span className="font-bold text-xs text-white">{rarity.label}</span>

          {rarity.label === "Exótico" && (
            <div className="w-px h-5 ml-5 bg-separator" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
