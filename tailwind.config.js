/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#fcfbf8",
        almond: "#f5f2eb",
        parchment: "#faf8f3",
        ink: "#1f1b17",
        mist: "#6f675f"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(59, 45, 29, 0.08)"
      },
      borderRadius: {
        shell: "2rem"
      }
    }
  },
  plugins: []
};
