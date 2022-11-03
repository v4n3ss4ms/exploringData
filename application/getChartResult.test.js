import { GetChartResult } from './getChartResult.js';
import { CalculateMin } from './calculateMin.js';
import { CalculateMax } from './calculateMax.js';
import { CalculateAverage } from './calculateAverage.js';
import { CalculateSum } from './calculateSum.js';
import { CalculateDistinct } from './calculateDistinct.js';
import { CalculateMode } from './calculateMode.js';

jest.mock('./calculateMin.js');
jest.mock('./calculateMax.js');
jest.mock('./calculateAverage.js');
jest.mock('./calculateSum.js');
jest.mock('./calculateDistinct.js');
jest.mock('./calculateMode.js');

const calculateMin = new CalculateMin(jest.fn());
const calculateMax = new CalculateMax(jest.fn());
const calculateAverage = new CalculateAverage(jest.fn());
const calculateSum = new CalculateSum(jest.fn());
const calculateDistinct = new CalculateDistinct(jest.fn());
const calculateMode = new CalculateMode(jest.fn());
const getChartResult = new GetChartResult(calculateMin, calculateMax, calculateAverage, calculateSum, calculateDistinct, calculateMode);

const A_FIELD = 'a_field';

describe('GetChartResult', () => {
  beforeEach(() => {
    CalculateMin.mockClear();
    CalculateMax.mockClear();
    CalculateAverage.mockClear();
    CalculateSum.mockClear();
    CalculateDistinct.mockClear();
    CalculateMode.mockClear();
  });
  it('checks CalculateMin execute methods have been called', () => {
    getChartResult.execute(A_FIELD, 'min');

    expect(calculateMin.execute).toHaveBeenCalled();
  });

  it('checks CalculateMax execute methods have been called', () => {
    getChartResult.execute(A_FIELD, 'max');

    expect(calculateMax.execute).toHaveBeenCalled();
  });

  it('checks CalculateAverage execute methods have been called', () => {
    getChartResult.execute(A_FIELD, 'average');

    expect(calculateAverage.execute).toHaveBeenCalled();
  });

  it('checks CalculateSum execute methods have been called', () => {
    getChartResult.execute(A_FIELD, 'sum');

    expect(calculateSum.execute).toHaveBeenCalled();
  });

  it('checks CalculateDistinct execute methods have been called', () => {
    getChartResult.execute(A_FIELD, 'distinct');

    expect(calculateDistinct.execute).toHaveBeenCalled();
  });

  it('checks CalculateMode execute methods have been called', () => {
    getChartResult.execute(A_FIELD, 'mode');

    expect(calculateMode.execute).toHaveBeenCalled();
  });
});
