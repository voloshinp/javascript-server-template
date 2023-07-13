import  Router  from '@koa/router'

// index
import all from './index/all'
import createMany from './index/createMany'
// ...
import create from './[id]/create'
import get from './[id]/id'
import update from './[id]/update'
import del from './[id]/delete'

const users = () => {
  const router = new Router({
    prefix: '/users'
  })


  return router
    .get('/', all)
    .post('/', createMany)

    .post('/add', create)
    .get('/:id', get)
    .put('/:id', update)
    .delete('/:id', del)
    .routes()
}

export default users