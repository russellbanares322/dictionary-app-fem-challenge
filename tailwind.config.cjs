module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-purple": "#F4F4F4",
      "light-purple": "#E7D0FA",
      purple: "#A544ED",
      black: "#2F2F2F",
      gray: "#757575",
      white: "#ffffff",
    },
    extend: {
      content: {
        chevronIcon: 'url("./src/assets/chevron.svg")',
      },
    },
  },
  plugins: [],
};
