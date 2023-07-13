/** @modules npm */
import  jwt from 'jsonwebtoken'

/** @modules libs */
import ApiError from '#/libs/error'
import { generateTokens } from '#/utils'

const refresh = (ctx) => {

  const { refreshToken } = ctx.request.body

  try {

    // @ts-ignore
    const { user } =  jwt.verify(refreshToken, process.env.REFRESH_TOKEN)

    const {
      accessToken,
      refreshToken: refresh
    } = generateTokens({user})

    return ctx.body = {
      message: 'Refresh token',
      status: true,
      data: {
        accessToken,
        refresh
      }
    }

  } catch(err) {

    throw new ApiError('Refresh token expired', 404)

  }

}

export default refresh