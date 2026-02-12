const isDev = process.env.NODE_ENV === 'development'

export const flags = {
  newFeature: isDev,
}
