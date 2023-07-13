import prisma from '#/libs/prisma'

const del = async (ctx) => {

  const { id } = ctx.params

  const deletedUser = await prisma.user.delete({
    where: {
      id
    }
  })

  return ctx.body = deletedUser

}

export default del