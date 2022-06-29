import { HttpRequest } from '@/application/helpers'
import { LambdaArgs } from '@/application/helpers/aws'

export const adaptLambdaArgsToHttpRequest = ({
  event
}: LambdaArgs): HttpRequest => {
  return {
    body: event.body,
    fullPath: event.requestContext.path,
    headers: event.headers,
    method: event.httpMethod,
    queryParams: event.queryStringParameters,
    requestId: event.requestContext.requestId
  }
}
