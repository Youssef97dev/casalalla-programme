/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        casa_1: "var(--casa-1)",
        casa_2: "var(--casa-2)",
        casa_3: "var(--casa-3)",
        casa_4: "var(--casa-4)",
        casa_5: "var(--casa-5)",
        casa_6: "var(--casa-6)",
        casa_7: "var(--casa-7)",
        casa_8: "var(--casa-8)",
      },
    },
  },
  plugins: [],
};
