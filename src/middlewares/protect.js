/** @modules npm */
import  jwt from 'jsonwebtoken'

/** @modules libs */
import ApiError from '#/libs/error'

/**
 * Authorization middleware
 * @date 11/07/2023 - 13:18:56
 *
 * @param {import('koa').Context} ctx
 * @param {import('koa').Next} next
 * @returns {*}
 */
export const protect = (ctx, next) => {

  const { method, header } = ctx.request

  if (method == 'OPTIONS') return next()

  if(!header.authorization) throw new ApiError('No token provided', 401)

  const token = header.authorization?.split('Bearer')[1].trim()

  let payload

  try {
    const accessSecret = process.env.ACCESS_TOKEN

    if(!accessSecret) throw new Error('No end access secret')

    payload = jwt.verify(token, accessSecret)

  } catch(err) {

    throw new ApiError('No token provided', 401)
  }

  // @ts-ignore
  ctx.state.user = payload.user

  return next()
}