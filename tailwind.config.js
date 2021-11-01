module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#2F2CBA",
        warnaborder:"#BFBFD6",
        warnarow:"#F5F4FC",
        second:"#7878A7",
        "#D6D6D6":"#D6D6D6",
        mata:"#A6A6A6",
        hijaumuda:"#C2F6CC",
        abuabu: "#E5E5E5",
        "#727286":"#727286"
      },
      width : {
        'xl' : '900px'
      },
      height: {
        'xl' : '500px'
      },
      fontFamily:{
        poppins:["Poppins"]
      },
      maxWidth: {
        kecil: '30px',
        sedang: '100px',
        besar: '170px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
