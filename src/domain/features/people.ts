export interface PeopleFilter {
  perform: (params: PeopleFilter.Params) => Promise<PeopleFilter.Result>
}

export namespace PeopleFilter {
  export type Params = {
    name: string
    cpf: string
  }

  export type Result = {
    name: string
    cpf: string
  }
}
