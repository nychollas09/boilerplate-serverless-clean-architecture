import { PeopleFilter } from '@/domain/features'
import { HttpRequest, HttpResponse, succeedRequest } from '../helpers'
import { Controller } from './controller'

type HttpRequestBody = { any: { property: string } }

type SucceedData = { fullPath: string }

export class PeopleController extends Controller {
  constructor(private peopleFilter: PeopleFilter) {
    super()
  }

  async perform({
    fullPath
  }: HttpRequest<HttpRequestBody>): Promise<HttpResponse> {
    const people = await this.peopleFilter.perform({
      name: 'Nichollas',
      cpf: '1'
    })

    return succeedRequest<SucceedData>({ fullPath })
  }
}
