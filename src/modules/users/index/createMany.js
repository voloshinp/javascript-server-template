import prisma from '#/libs/prisma'

/**
 *
 * @param {any} ctx
 */
const createMany = async (ctx) => {

  const {
    users
  } = ctx.request.body

  const createdUsers = await prisma.user.createMany({
    data: users
  })

  return ctx.body = createdUsers
}

export default createMany