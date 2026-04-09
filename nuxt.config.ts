export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,

  typescript: {
    typeCheck: true,
  },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css',
        },
      ],
    },
  },

  runtimeConfig: {
    supabaseUrl: '',
    supabaseSecretKey: '',
    revealGender: '',
    public: {
      apiBase: '/api',
    },
  },
})
