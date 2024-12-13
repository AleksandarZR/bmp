import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "color0": "var(--color0)",
                "color0-transparent": "var(--color0-transparent)",
                "color1": "var(--color1)",
                "color1-transparent": "var(--color1-transparent)",
                "color2": "var(--color2)",
                "color2-transparent": "var(--color2-transparent)",
                "color3": "var(--color3)",
                "color3-transparent": "var(--color3-transparent)",
                "color4": "var(--color4)",
                "color4-transparent": "var(--color4-transparent)",
                "color5": "var(--color5)",
                "color5-transparent": "var(--color5-transparent)",
                "color6": "var(--color6)",
                "color6-transparent": "var(--color6-transparent)",
                "color7": "var(--color7)",
                "color7-transparent": "var(--color7-transparent)",
                "color8": "var(--color8)",
                "color8-transparent": "var(--color8-transparent)",
                "color9": "var(--color9)",
                "color9-transparent": "var(--color9-transparent)",
                "color10": "var(--color10)",
                "color10-transparent": "var(--color10-transparent)",
                "color11": "var(--color11)",
                "color12": "var(--color12)",
            },
            spacing: {
                space1: "8px",
                space2: "16px",
                space3: "24px",
                space4: "32px",
                space5: "40px",
                space6: "48px",
                space7: "56px",
                space8: "64px",

                space11: "8px",
                space12: "16px",
                space13: "24px",
                space14: "32px",
                space15: "40px",

                space21: "8px",
                space22: "16px",
                space23: "24px",
                space24: "32px",
                space25: "40px",
            },
            animation: {
                pulseStar: "pulseStar 5s linear infinite both"
            },
            keyframes: {
                pulseStar: {
                    "0%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 0px",
                        transform: "scale(0.2)",
                    },
                    "25%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 25px",
                    },
                    "50%": {
                        textShadow: "rgb(255, 255, 255) 1px 1px 50px",
                        transform: "scale(2.7)",
                    },
                    "75%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 25px",
                    },
                    "100%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 0px",
                        transform: "scale(0.2)",
                    },
                }
            }
        },
        screens: {
            sm: { min: "100px", max: "600.01px" },

            md: { min: "600.02px", max: "1200.01px" },

            lg: { min: "1200.02px", max: "3000px" },
        },
        fontFamily: {
            mono: ["ui-monospace", "SFMono-Regular"],
        },
    },
    plugins: [
        require("@xpd/tailwind-3dtransforms"),
    ],
};
export default config;
