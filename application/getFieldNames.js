export class GetFieldNames {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  execute() {
    return this.dataRepository.data.meta.map((e) => e.name);
  }
}
