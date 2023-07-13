
/**
 * Description placeholder
 * @date 11/07/2023 - 13:14:55
 *
 * @async
 * @param {import("koa").Context} ctx
 * @param {import("koa").Next} next
 * @returns {Promise<any>}
 */
const errorHandler = async (ctx, next) => {
  try {

    await next()

  } catch(err) {
    console.log('ERROR', err)

    // @ts-ignore
    ctx.status = err.code

    return ctx.body = {
      message: 'Error',
      status: false,
      error: err,
    }
  }
}

export default errorHandler