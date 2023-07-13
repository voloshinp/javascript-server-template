// Import global npm modules
import cluster from 'node:cluster'

// Import clusters modules
import primary from './clusters/primary'
import worker from './clusters/worker'

require('dotenv').config()

// Use primary cluster
if (cluster.isPrimary) primary()

// Use worker cluster
if (cluster.isWorker) worker()