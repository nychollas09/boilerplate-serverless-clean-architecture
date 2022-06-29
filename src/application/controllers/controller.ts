import { HttpRequest, HttpResponse, serverErrorRequest } from '../helpers'

export abstract class Controller {
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return serverErrorRequest(error as Error)
    }
  }

  abstract perform(httpRequest: HttpRequest): Promise<HttpResponse>
}
