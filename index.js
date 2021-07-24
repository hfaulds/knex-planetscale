const { PSDB } = require('planetscale-node')
const Client_MySQL2 = require('knex/lib/dialects/mysql2/index.js')

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
