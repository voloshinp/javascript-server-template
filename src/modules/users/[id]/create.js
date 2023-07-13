/** @modules libs */
import prisma from '#/libs/prisma'

const create = async (ctx) => {

  const {
    email,
    name,
    surname,
    position,
    groupId,
    roles
  } = ctx.request.body

  let group = undefined

  if(groupId) {
    group = await prisma.group.findUnique({
      where: {
        id: groupId
      }
    })
  }


  const user = await prisma.user.create({
    data: {
      email,
      position,
      roles,
      group: group
        ? {
          connect: group
        }
        : undefined,
      account: {
        create: {
          name,
          surname,
        }
      },
    }
  })

  return ctx.body = user

}

export default create