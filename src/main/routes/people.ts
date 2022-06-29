import { PeopleController } from '@/application/controllers'
import { adaptServerlessLambdaRoute } from '@/infrastructure/adapters'

export const handle = (args: { [key: string]: any }) =>
  adaptServerlessLambdaRoute(new PeopleController(), {
    event: args.event,
    context: args.context
  })
