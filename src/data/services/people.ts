import { PeopleFilter } from '@/domain/features'

export class PeopleFilterService implements PeopleFilter {
  private peoples = [
    { name: 'Nichollas', cpf: '1' },
    { name: 'Evelyn', cpf: '2' }
  ]

  async perform({
    name,
    cpf
  }: PeopleFilter.Params): Promise<PeopleFilter.Result> {
    return this.peoples.find(
      (people) => people.cpf === cpf && people.name === name
    ) as PeopleFilter.Result
  }
}
