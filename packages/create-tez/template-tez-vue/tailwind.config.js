module.exports = {
  content: [
    __dirname + "/components/**/*.{vue,js,ts,jsx,tsx}",
    __dirname + "/pages/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
