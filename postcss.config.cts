module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
    'tailwindcss/nesting': {},
    'postcss-import': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
