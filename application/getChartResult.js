export class GetChartResult {
  constructor(calculateMin, calculateMax, calculateAverage, calculateSum, calculateDistinct, calculateMode) {
    this.calculateMin = calculateMin;
    this.calculateMax = calculateMax;
    this.calculateAverage = calculateAverage;
    this.calculateSum = calculateSum;
    this.calculateDistinct = calculateDistinct;
    this.calculateMode = calculateMode;
  }

  execute(fieldName, chart) { 
    switch (chart) {
      case 'min':
        return this.calculateMin.execute(fieldName);
        break;
      case 'max':
        return this.calculateMax.execute(fieldName);
        break;
      case 'average':
        return this.calculateAverage.execute(fieldName);
        break;
      case 'sum':
        return this.calculateSum.execute(fieldName);
        break;
      case 'distinct':
        return this.calculateDistinct.execute(fieldName);
        break;
      case 'mode':
        return this.calculateMode.execute(fieldName);
        break;
      default:
        return `We are very sorry, ${chart} is not a valid chart type.`;
    }
  }
}
