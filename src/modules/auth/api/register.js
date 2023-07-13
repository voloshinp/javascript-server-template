import ApiError from '#/libs/error'
import bcrypt from 'bcrypt'
import { generateTokens } from '#/utils'
import prisma from '#/libs/prisma'

const register = async (ctx) => {

  const {
    name,
    surname,
    email,
    password
  } = ctx.request.body

  const exists = await prisma.user.findUnique({
    where: {
      email,
    }
  })

  if(exists) throw new ApiError('User already exists', 501)

  const pass = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: pass,
      account: {
        create: {
          name,
          surname,
        }
      }

    },
    include: {
      account: true
    }
  })

  const { accessToken, refreshToken } = generateTokens({ user })

  return ctx.body = {
    message: 'Registered',
    status: true,
    data: {
      accessToken,
      refreshToken,
      user,
    }
  }
}

export default register