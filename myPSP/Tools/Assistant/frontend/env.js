export const ENV_PRODUCTION = 'production'
export const ENV_DEV = 'development'

export function isProduction (env = process.env.NODE_ENV) {
  return env === ENV_PRODUCTION
}

export function isDevelopment (env = process.env.NODE_ENV) {
  return env === ENV_DEV
}
