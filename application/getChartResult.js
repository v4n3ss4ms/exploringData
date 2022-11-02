export class GetChartResult {
  constructor(calculateMin, calculateMax, calculateAverage, calculateSum, calculateDistinct, calculateMode) {
    this.calculateMin = calculateMin;
    this.calculateMax = calculateMax;
    this.calculateAverage = calculateAverage;
    this.calculateSum = calculateSum;
    this.calculateDistinct = calculateDistinct;
    this.calculateMode = calculateMode;
  }
//'min', 'max', 'average', 'sum', 'distinct', 'mode'
  execute(fieldName, chart) { 
    switch (chart) {
      case 'min':
        return this.calculateMin.execute(fieldName, chart);
        break;
      case 'max':
        return this.calculateMax.execute(fieldName, chart);
        break;
      case 'average':
        return this.calculateAverage.execute(fieldName, chart);
        break;
      case 'sum':
        return this.calculateSum.execute(fieldName, chart);
        break;
      case 'distinct':
        return this.calculateDistinct.execute(fieldName, chart);
        break;
      case 'mode':
        return this.calculateMode.execute(fieldName, chart);
        break;
      default:
        return `We are very sorry, ${chart} is not a valid chart type.`;
    }
  }
}
