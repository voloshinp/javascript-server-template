import prisma from '#/libs/prisma'

const update = async (ctx) => {

  const { id } = ctx.params

  const {
    email,

    name,
    surname,
    avatar,
    position,
    roles,

    groupId,
  } = ctx.request.body


  const group = await prisma.group.findUnique({
    where: {
      id: groupId
    }
  })

  if(!group) return ctx.body = 'bad group'

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      roles,
      position,
      account: {
        update: {
          name,
          surname,
          avatar,
        }
      }
    }
  })

  return ctx.body = updatedUser

}

export default update