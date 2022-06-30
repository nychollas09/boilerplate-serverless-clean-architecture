import { adaptLambdaArgsToHttpRequest } from '@/application/adapters/aws'
import { Controller } from '@/application/controllers/controller'
import { LambdaArgs } from '@/application/helpers/aws'

export const adaptServerlessLambdaRoute = async (
  controller: Controller,
  args: LambdaArgs
) => {
  const { statusCode, data } = await controller.handle(
    adaptLambdaArgsToHttpRequest(args)
  )

  return {
    statusCode,
    body: JSON.stringify(
      data instanceof Error ? { error: data.message } : data,
      null,
      2
    )
  }
}
