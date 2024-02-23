declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_SECURE_KEY: string
    AUTH_SECRET: string
    AUTH_URL: string
    GITHUB_CLIENT_ID: string
    GITHUB_SECRET: string
  }
}
