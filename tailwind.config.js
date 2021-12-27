module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#15181C',
        search: '#202327',
        white: '#D9D9D9',
        lesswhite: '#d4d4d4',
        tw: '#fff',
        gray: '#7A7A7A',
        outline: '#2F3336',
        retweet: '#00C06B',
        like: '#E8265E',
        twitter: '#33A1F2',
        tdarkhover: '#011017',
        tlighthover: '#2C8ED6',
      },
      dropShadow: {
        'tlike': '0px 0px 1px #e8265e',
        'tcomment': '0px 0px 1px #33A1F2',
        'tshare': '0px 0px 1px #00C06B',
      },
      screens:{
        'cel': '500px',
        // => @media (min-width: 500px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        },
    },

  },
  plugins: [],
}