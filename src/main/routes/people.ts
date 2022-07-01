import '../config/module-alias' // Tem que ser assim pois é essa configuração que vai possibilitar a utilização dos Paths "@/*"
import { PeopleController } from '@/application/controllers'

import { adaptServerlessLambdaRoute } from '@/infrastructure/adapters/aws'
import { LambdaContext, LambdaEvent } from '@/application/helpers/aws'

export const handler = async (event: LambdaEvent, context: LambdaContext) =>
  adaptServerlessLambdaRoute(new PeopleController(), {
    event,
    context
  })
