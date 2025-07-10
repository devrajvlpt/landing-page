// fill out the config file for tailwindcss
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  safelist: [
    'w-[180px]', 'w-[270px]', 'w-[350px]', 'w-[430px]',
    'h-[120px]', 'h-[180px]', 'h-[230px]', 'h-[290px]',
    // Add more custom classes as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}