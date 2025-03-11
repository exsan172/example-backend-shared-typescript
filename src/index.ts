import { Hono } from 'hono'
import { EnumUserRoles } from '../shared-types/src'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono '+EnumUserRoles.ADMIN+" !")
})

export default app
