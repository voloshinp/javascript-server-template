import bcrypt from 'bcrypt'

import ApiError from '#/libs/error'
import { generateTokens } from '#/utils'
import prisma from '#/libs/prisma'

const login = async (ctx) => {

  const {
    email,
    password
  } = ctx.request.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      account: true
    }
  })

  if(!user) throw new ApiError('User not found', 401)

  const isEqual = bcrypt.compareSync(password, user.password)

  if(!isEqual) throw new ApiError('Password didn\'t match', 500)

  const {
    accessToken,
    refreshToken
  } = generateTokens({ user })

  return ctx.body = {
    user,
    accessToken,
    refreshToken
  }

}

export default login