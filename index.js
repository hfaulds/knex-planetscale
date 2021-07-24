import { PSDB } from 'planetscale-node'
import * as Client_MySQL2 from 'knex/lib/dialects/mysql2/index.js'

class Client_PSDB extends Client_MySQL2 {
  acquireRawConnection() {
    const psdb = new PSDB()
    return psdb.createConnection()
  }
}

Object.assign(Client_PSDB.prototype, {
  driverName: 'psdb',
});

module.exports = Client_PSDB;
