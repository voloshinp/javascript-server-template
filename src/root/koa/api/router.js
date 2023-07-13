/** @modules npm */
import Router from '@koa/router'
import logger from 'koa-logger'

/** @import modules */
import auth from '#/modules/auth'
import users from '#/modules/users'

const router = () => {
  const r = new Router({
    prefix: '/v1'
  })

  // Use router functions
  return r
    .use(logger())
    .use(auth())
    .use(users())
    .routes()
}

export default router