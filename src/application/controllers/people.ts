import { HttpRequest, HttpResponse, succeedRequest } from '../helpers'
import { Controller } from './controller'

type HttpRequestBody = { any: { property: string } }

type SucceedData = { fullPath: string }

export class PeopleController extends Controller {
  async perform({
    fullPath
  }: HttpRequest<HttpRequestBody>): Promise<HttpResponse> {
    return succeedRequest<SucceedData>({ fullPath })
  }
}
