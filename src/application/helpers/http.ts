import { ServerException } from '../exceptions'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type HttpRequest<T = any> = {
  body: T
  headers: { [key: string]: string }
  fullPath: string
  requestId: string
  method: string
  queryParams: { [key: string]: string }
}

export const serverErrorRequest = (
  error: Error
): HttpResponse<typeof error> => ({
  statusCode: 500,
  data: new ServerException(error)
})

export const succeedRequest = <T>(data: T): HttpResponse<typeof data> => ({
  statusCode: 200,
  data
})
