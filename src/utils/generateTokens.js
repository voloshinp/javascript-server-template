/** @modules npm */
import jwt from 'jsonwebtoken'

/**
 * Generate Access and Refresh token pair with user
 * @date 11/07/2023 - 13:06:43
 *
 * @param {{ user: any }} props
 * @returns {{
 *  accessToken: string;
 *  refreshToken: string;
 * }}
 */
export const generateTokens = ({ user }) => {

  const accessSecret = process.env.ACCESS_TOKEN
  const refreshSecret = process.env.REFRESH_TOKEN

  if(!accessSecret || !refreshSecret) throw new Error('No env secrets')

  const accessToken = jwt.sign(
    { user, expDate: 1000 },
    accessSecret,
    {
      expiresIn: '3d'
    }
  )

  const refreshToken = jwt.sign(
    { user, expData: 12345 },
    refreshSecret,
    {
      expiresIn: '100d'
    }
  )

  return {
    accessToken,
    refreshToken
  }
}