export class CalculateMin {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  execute(fieldName) {
    const data = this.dataRepository.data.data;
    const result = data.reduce((prev, curr) => (prev[fieldName] < curr[fieldName] ? prev : curr));

    return result[fieldName];
  }
}
