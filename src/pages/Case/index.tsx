import { motion } from "framer-motion";
import isNil from "lodash/isNil";
import minBy from "lodash/minBy";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router";
import casePNG from "../../assets/cases/goat-case.png";
import goBackPNG from "../../assets/icons/back.svg";
import keyPNG from "../../assets/icons/key.svg";
import santaHatPNG from "../../assets/skins/santa-hat.png";
import ItemBox from "../../components/ItemBox";
import RarityIndex from "../../components/RarityIndex";
import { useGetCase } from "../../hooks/services/useCases";

export default function Case() {
  const [caseAmountToOpen, setCaseAmountToOpen] = useState(1);
  const { data: caseData, isLoading: isLoadingCases } = useGetCase();
  const navigate = useNavigate();

  if (isLoadingCases) {
    return <span className="text-white text-2xl">Carregando...</span>;
  }

  if (isNil(caseData)) {
    return (
      <span className="text-white text-2xl">404 - Caixa não encontrada!</span>
    );
  }

  function handleCaseAmountToOpen(action: "add" | "remove") {
    if (action === "add") {
      if (caseAmountToOpen === 5) return;
      setCaseAmountToOpen((prev) => prev + 1);
    } else {
      if (caseAmountToOpen === 1) return;
      setCaseAmountToOpen((prev) => prev - 1);
    }
  }

  const bestCaseItem = minBy(caseData.skins, (skin) => skin.probability)!;

  return (
    <div className="w-full min-h-screen bg-default bg-cover flex flex-col items-center p-4 md:p-8 select-none">
      <RarityIndex />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mt-8 md:mt-20 space-y-8 md:space-y-0 md:space-x-8"
      >
        {/* Informações da caixa */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-bold text-2xl md:text-3xl text-white mb-3">
            {caseData.name}
          </h1>
          <span className="font-light text-sm text-white/40 text-center md:text-left mb-8">
            {caseData.description}
          </span>

          <div className="flex">
            <motion.div className="border border-rare bg-rare-lg rounded py-2 px-5 flex justify-between items-center">
              <span className="uppercase font-semibold text-xl md:text-2xl text-white">
                Quantidade: {caseAmountToOpen}
              </span>
            </motion.div>

            <div className="flex flex-col items-center justify-center gap-2 ml-2">
              <motion.div
                whileTap={{ scale: 0.94 }}
                onClick={() => handleCaseAmountToOpen("add")}
                className="text-white font-bold p-2 border border-uncommon bg-uncommon-lg rounded flex justify-center items-center cursor-pointer hover:shadow-[0_0_15px_0] hover:shadow-uncommon"
              >
                <AiOutlinePlus />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.94 }}
                onClick={() => handleCaseAmountToOpen("remove")}
                className="text-white font-bold p-2 border border-mythic bg-mythic-lg rounded flex justify-center items-center cursor-pointer hover:shadow-[0_0_15px_0] hover:shadow-mythic"
              >
                <AiOutlineMinus />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Imagem da caixa */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="h-40 md:h-60"
          src={casePNG}
          alt={caseData.name}
        />

        {/* Melhor item da caixa */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ItemBox
            icon={santaHatPNG}
            rarity={bestCaseItem.rarity}
            infos={{
              title: "Melhor item",
              item: bestCaseItem.name,
              value: 5000,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3"
      >
        {caseData.skins.map((skin, index) => (
          <motion.div
            key={skin.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <ItemBox
              icon={santaHatPNG}
              rarity={skin.rarity}
              probability={skin.probability}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col md:flex-row items-center mt-8 md:mt-16 space-y-4 md:space-y-0 md:space-x-8"
      >
        {/* Disclaimer */}
        <span className="max-w-lg font-normal text-white/10 text-xs text-center md:text-left">
          Ao adquirir uma caixa de sorte no servidor GOAT dentro do GTA RP, o
          cliente está ciente e aceita que a compra não garante um item
          específico. O conteúdo das caixas de sorte é aleatório, sendo essa a
          essência do sistema, onde a experiência de surpresa faz parte da
          compra. Todos os itens obtidos são cosméticos exclusivos, projetados
          para personalizar seu personagem e destacar seu estilo no mundo
          imersivo do RP, sem oferecer vantagens competitivas. Isso inclui
          roupas, acessórios, e veículos personalizados, permitindo uma
          customização única e diferenciada.
        </span>

        {/* Botão para retornar */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
          className="border border-mythic bg-mythic-lg rounded py-2 px-5 flex justify-between items-center cursor-pointer"
        >
          <span className="uppercase font-semibold text-xl md:text-2xl text-white">
            Retornar
          </span>

          <div className="w-px h-8 mx-5 bg-separator" />

          <img src={goBackPNG} alt="go-back" />
        </motion.div>

        {/* Botão para abrir */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
          onClick={() =>
            navigate("/opening-case", {
              state: { amountToOpen: caseAmountToOpen },
            })
          }
          className="border border-rare bg-rare-lg rounded py-4 px-9 flex justify-between items-center cursor-pointer"
        >
          <span className="uppercase font-semibold text-xl md:text-2xl text-white mr-5">
            Abrir caixa
          </span>

          <img src={keyPNG} alt="open-case" />
        </motion.div>
      </motion.div>
    </div>
  );
}
