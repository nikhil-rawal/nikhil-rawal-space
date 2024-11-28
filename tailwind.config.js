module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61", // Coral
        secondary: "#FFD700", // Gold
        accent: "#4CAF50", // Green
        lightBg: "#FFFFFF", // White
        darkBg: "#1E1E1E", // Dark Gray
        lightText: "#333333", // Charcoal
        darkText: "#ECF0F1", // Light Gray
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        subheading: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
