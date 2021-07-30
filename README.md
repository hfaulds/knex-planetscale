# knex-planetscale

A toy knex adapter to interface with planetscale.

## Usage

The `node-planetscale` module uses env vars to connect. Because this is a toy project (it will only exist until planetscale exposes datbase URLs themselves) and relies on subclassing the `mysql2` adapter some connection settings may be required but will do nothing.


```
import { Client_PSDB } from 'knex-planetscale'
import { Knex, knex } from 'knex'

const config: Knex.Config = {
  client: Client_PSDB,
  connection: {
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'database'
  }
}
const conn = knex(config)
```
