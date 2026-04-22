export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
  return password && password.length >= 6
}

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

export const validateDisplayName = (name: string): boolean => {
  return name && name.length >= 2 && name.length <= 50
}

export const validateSystemPrompt = (prompt: string): boolean => {
  return prompt && prompt.length > 0 && prompt.length <= 2000
}
