/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#09090b', // Ejemplo de color personalizado
        'secondary': 'rgba(0, 0, 0, 0.6)',  // Otro color personalizado
        'light' : '#e5e7eb',
        'secondary-bold' : '#374151',
        'red' : '#ef4444'
       },
    },
  },
  plugins: [],
}

