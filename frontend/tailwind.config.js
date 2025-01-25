/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#e5f3ff',
            100: '#c2e0ff',
            200: '#a6d5ff',
            300: '#82c6ff',
            400: '#64b2ff',
            500: '#44a8ff',
            600: '#3398ff',
            700: '#267dff',
            800: '#1d6bf9',
            900: '#1458d1',
          },
          secondary: {
            50: '#f3e8ff',
            100: '#e5cfff',
            200: '#d4b6ff',
            300: '#c19dff',
            400: '#ad85ff',
            500: '#a064ff',
            600: '#8c3eff',
            700: '#752cff',
            800: '#5f1dff',
            900: '#4812d1',
          },
        },
      },
    },
    plugins: [],
  };
  