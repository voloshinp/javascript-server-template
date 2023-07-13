// Import global npm modules
import cluster  from 'node:cluster'
import { cpus } from 'node:os'

// Create primary cluster
const primary = () => {

  if(process.env.NODE_ENV == 'production') {
    console.info(`Running on ${process.env.HOST}/`)
  } else {
    console.info(`Running on http://localhost:${process.env.PORT}/`)
  }

  // Use for function
  if(process.env.NODE_ENV == 'production') {
    for (let i = 0; i < cpus().length; i++) cluster.fork()
  } else {
    cluster.fork()
  }

  // Use on function
  cluster.on('exit', () => cluster.fork('ok'))

}

// Export default primary cluster
export default primary