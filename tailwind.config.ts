import type { Config } from "tailwindcss";

const config: Config =  {
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
            },
            spacing: {
                space1: "8px",
                space2: "16px",
                space3: "24px",
                space4: "32px",
                space5: "40px",
            },
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
    plugins: [], 
};
export default config;
