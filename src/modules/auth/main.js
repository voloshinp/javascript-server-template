/** @modules npm */
import Router from '@koa/router'

/** @modules endpoints */
import login from './api/login'
import refresh from './api/refresh'
import register from './api/register'

const auth = () => {

  const router = new Router({
    prefix: '/auth'
  })

  return router
    .post('/login', login)
    .post('/register', register)
    .post('/refresh', refresh)
    .routes()
}

// Export default doc endpoint
export default auth