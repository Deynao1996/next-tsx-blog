declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_SECURE_KEY: string
    AUTH_SECRET: string
    AUTH_URL: string
    AUTH_GITHUB_ID: string
    AUTH_GITHUB_SECRET: string
    BASE_URL: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    RESEND_API_KEY: string
  }
}
