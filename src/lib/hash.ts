import brcypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await brcypt.hash(password, 10)
  return hashedPassword
}

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isValid = await brcypt.compare(password, hashedPassword)
  return isValid
}

export const generateAccessToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '15m',
  })
}

export const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '7d',
  })
}

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!)
}

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
}

export const getUserFromToken = (token: string): string | null => {
  try {
    const userId = verifyAccessToken(token) as string
    return userId
  } catch (error) {
    return null
  }
}
