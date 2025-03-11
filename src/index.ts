import { Hono } from 'hono'
import { EnumUserRoles } from '../shared-types'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono '+EnumUserRoles.ADMIN+" !")
})

export default app
