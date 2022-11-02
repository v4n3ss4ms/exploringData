export class CalculateDistinct {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  execute(fieldName) {
    const data = this.dataRepository.data.data;
    const extractData = data.map((e) => e[fieldName]);
    const distinctData = [... new Set(extractData)];

    return distinctData;
  }
}
