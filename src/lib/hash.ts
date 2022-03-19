import brcypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await brcypt.hash(password, 10)
  return hashedPassword
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

export const verifyRefreshToken = (token: string): string => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!) as string
}

export const verifyAccessToken = (token: string): string => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as string
}
