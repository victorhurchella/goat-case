import { motion } from "framer-motion";
import shuffle from "lodash/shuffle";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import chevronDownSVG from "../../assets/icons/chevron-down.svg";
import keyPNG from "../../assets/icons/key.svg";
import santaHatPNG from "../../assets/skins/santa-hat.png";
import ItemBox from "../../components/ItemBox";
import { useGetCase } from "../../hooks/services/useCases";
import { Skin } from "../../hooks/services/useCases/types";
import { getRarityLabel } from "../../utils/rarities";

export default function OpenCase() {
  const [spinned, setSpinned] = useState(false);
  const [sortedSkins, setSortedSkins] = useState<Skin[]>([]); // Armazena todos os sorteios
  const { data: caseData } = useGetCase();

  const navigate = useNavigate();
  const { state } = useLocation();
  const amountToOpen = state?.amountToOpen ?? 1;

  if (!caseData) return <></>;

  // Array para armazenar os resultados de cada shuffle
  const allShuffles = Array.from({ length: amountToOpen }, () =>
    shuffle([
      ...caseData!.skins,
      ...caseData!.skins,
      ...caseData!.skins,
      ...caseData!.skins,
    ]),
  );

  setTimeout(() => {
    if (spinned) return;

    setSpinned(true);
    // Extrai o item no índice 7 de cada shuffle e armazena em sortedSkins
    const selectedSkins = allShuffles.map(
      (shuffle) => shuffle[shuffle.length - 7],
    );
    setSortedSkins(selectedSkins);
  }, 4_800);

  return (
    <div className="w-screen h-screen bg-default bg-cover flex flex-col items-center justify-center relative">
      {spinned && sortedSkins.length > 0 ? (
        <div className="flex flex-col items-center z-10">
          <div className="w-full flex items-center justify-center">
            {sortedSkins.map((skin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center justify-center mx-4"
              >
                <h1 className="font-bold text-white capitalize text-xl mb-4">
                  {skin.name} -{" "}
                  <span className="font-light text-white/50">
                    {getRarityLabel(skin.rarity)}
                  </span>
                </h1>

                <div
                  key={index}
                  className="max-w-32 mx-1 flex-shrink-0 flex-grow-0"
                >
                  <ItemBox icon={santaHatPNG} rarity={skin.rarity} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 0.9 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1 }}
            onClick={() => navigate("/")}
            className="max-w-96 border border-rare bg-rare-lg rounded py-4 px-10 flex justify-between items-center cursor-pointer mt-20"
          >
            <span className="uppercase font-semibold text-xl md:text-2xl text-white mr-5">
              Abrir mais caixas
            </span>

            <img src={keyPNG} alt="open-case" />
          </motion.div>
        </div>
      ) : (
        <>
          {allShuffles.map((shuffleResult, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="my-6 relative" // 'relative' para que o ícone seja posicionado corretamente
            >
              {/* Ícone de chevronDown posicionado acima da lista */}
              <img
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-20"
                src={chevronDownSVG}
                alt={caseData.name}
              />

              {/* Lista de skins com a animação de rotação */}
              <div className="w-1200 max-h-32 inline-flex overflow-hidden relative z-10">
                <div className="flex animate-scroll">
                  {shuffleResult.map((skin, skinIndex) => (
                    <div
                      key={skinIndex}
                      className="mx-1 flex-shrink-0 flex-grow-0"
                    >
                      <ItemBox icon={santaHatPNG} rarity={skin.rarity} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
}
