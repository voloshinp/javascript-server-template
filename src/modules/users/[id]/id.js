import prisma from '#/libs/prisma'

const get = async (ctx) => {

  const { id } = ctx.params

  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return ctx.body = user

}

export default get