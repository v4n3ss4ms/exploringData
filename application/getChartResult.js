export class GetChartResult {
  constructor(dataRepository, calculateAverage) {
    this.dataRepository = dataRepository;
    this.calculateAverage = calculateAverage;
  }

  async execute() {
    return true;
  }
}
