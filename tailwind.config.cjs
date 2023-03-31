module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-purple": "#F4F4F4",
      "light-purple": "#E7D0FA",
      "dark-purple": "#2F1639",
      purple: "#A544ED",
      black: "#2F2F2F",
      dark: "#000000",
      gray: "#757575",
      white: "#ffffff",
      "dark-gray": "#1F1F1F",
    },
    extend: {
      content: {
        chevronIcon: 'url("./src/assets/chevron.svg")',
      },
    },
  },
  plugins: [],
};
