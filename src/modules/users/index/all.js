/** @modules libs */
import prisma from '#/libs/prisma'

/**
 * Get all users
 * @date 11/07/2023 - 13:35:39
 *
 * @async
 * @param {*} ctx
 * @returns {Promise<any>}
 */
const all = async (ctx) => {

  const users = await prisma.user.findMany()

  return ctx.body = users

}

export default all