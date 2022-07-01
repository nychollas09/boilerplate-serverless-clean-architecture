export type LambdaEvent = {
  resource: string
  path: string
  httpMethod: string
  headers: { [key: string]: string }
  queryStringParameters: { [key: string]: string }
  requestContext: {
    path: string
    requestId: string
  }
  body: { [key: string]: any }
}

export type LambdaContext = {
  awsRequestId: string
  functionName: string
  invokedFunctionArn: string
}

export type LambdaArgs = {
  event: LambdaEvent
  context: LambdaContext
}
