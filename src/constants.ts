export const COMPANY_NAME = 'Nitro'
export const BASE_URL = ''
export const SUPPORT_EMAIL_ADDRESS = 'support@xyz.com'

export const UNEXPECTED_ERROR_MESSAGE =
  'Something went wrong. Please try again later.'

export const formErrorMessage = {
  required(fieldName: string) {
    return `Please enter a ${fieldName}.`
  },
  minLength(min: number) {
    return `Use at least ${min} characters.`
  },
  maxLength(max: number) {
    return `Use ${max} characters or fewer.`
  },
}
