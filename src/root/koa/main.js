/** @modules npm */
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import mount from 'koa-mount'
import cors from '@koa/cors'
import path from 'path'

/** @modules api */
import errorHandler from './api/error'
import router from './api/router'


const koaApp = () => {
  // Create koa app
  const app = new Koa()

  // Use app functions
  app
    .use(cors())
    .use(mount('/v1/uploads', serve(`${path.resolve('./')}/uploads`)))
    .use(bodyParser())
    .use(errorHandler)
    .use(router())
    .use((ctx) => ctx.body = { message: 'A-Hub server', status: true })
    .listen(process.env.PORT)

}

export default koaApp