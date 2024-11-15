import { rgba } from "polished";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        common: "#898989",
        uncommon: "#00F308",
        rare: "#0084F3",
        epic: "#5F29DD",
        legendary: "#DDA429",
        mythic: "#DD2929",
        exotic: "#FF0099",
        separator: rgba("#FFF", 0.15),
      },
      fontSize: {
        xs: ["8px", "9.6px"],
      },
      spacing: {
        1300: "81.25rem",
        1200: "1200px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: `translateX(-190%)`,
          },
        },
      },
      animation: {
        scroll: "scroll 4s ease forwards",
      },
      backgroundImage: ({ theme }) => ({
        default: "url('/src/assets/backgrounds/default.png')",
        "open-case": "url('/src/assets/backgrounds/open-case.png')",
        "common-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.common"), 0.5)} -6.69%,
          ${rgba(theme("colors.common"), 0.25)} 53.29%
        )`,
        "uncommon-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.uncommon"), 0.5)} -6.69%,
          ${rgba(theme("colors.uncommon"), 0.25)} 53.29%
        )`,
        "rare-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.rare"), 0.5)} -6.69%,
          ${rgba(theme("colors.rare"), 0.25)} 53.29%
        )`,
        "epic-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.epic"), 0.5)} -6.69%,
          ${rgba(theme("colors.epic"), 0.25)} 53.29%
        )`,
        "legendary-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.legendary"), 0.5)} -6.69%,
          ${rgba(theme("colors.legendary"), 0.25)} 53.29%
        )`,
        "mythic-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.mythic"), 0.5)} -6.69%,
          ${rgba(theme("colors.mythic"), 0.25)} 53.29%
        )`,
        "exotic-lg": `linear-gradient(65.13deg,
          ${rgba(theme("colors.exotic"), 0.5)} -6.69%,
          ${rgba(theme("colors.exotic"), 0.25)} 53.29%
        )`,
      }),
    },
  },
};
