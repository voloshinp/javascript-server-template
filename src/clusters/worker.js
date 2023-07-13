/** @modules root */
import koaApp from '#/root/koa'

// Create worker cluster
const worker = () => {

  // Init app
  koaApp()

}

// Export default worker cluster
export default worker