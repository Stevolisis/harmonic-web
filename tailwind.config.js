/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#0a688a',
        bgSecondary:'#0497a7',
        bgTertiary:'#9cd1d8',
        bgLight:'#f2f2f2',
        bgDark:'#073c50',
        subGray:'#e0e0e0',
      },
      fontFamily: {
        ArchivoItalic: ["ArchivoItalic", "ArchivoItalic"],
        ArchivoExtraBold: ["ArchivoExtraBold", "ArchivoExtraBold"],
        ArchivoBold: ["ArchivoBold", "ArchivoBold"],
        ArchivoSemiBold: ["ArchivoSemiBold", "ArchivoSemiBold"],
        ArchivoMedium: ["ArchivoMedium", "ArchivoMedium"],
        ArchivoRegular: ["ArchivoRegular", "ArchivoRegular"],
        ArchivoLight: ["ArchivoLight", "ArchivoLight"],
        ArchivoExtraLight: ["ArchivoExtraLight", "ArchivoExtraLight"],
      },
      screens:{
        md:'800px'
      }
    },
  },
  plugins: [],
}
