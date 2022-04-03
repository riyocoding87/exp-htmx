module.exports = {
  content: ["./src/template/*.{html,js}"],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
