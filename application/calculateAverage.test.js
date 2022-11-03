import { CalculateAverage } from './calculateAverage.js';

const dataRepositoryMock = () => {
  return {
    data: {
      data: [
        {
          pulocationid: 237,
          dolocationid: 237,
          total_amount: 6.36,
        },
        {
          pulocationid: 100,
          dolocationid: 237,
          total_amount: 17.3,
        },
        {
          pulocationid: 236,
          dolocationid: 161,
          total_amount: 16.3,
        },
      ],
    },
  };
};
const calculateAverage = new CalculateAverage(dataRepositoryMock());

describe('CalculateAverage', () => {
  it('calculates total_amount average', () => {
    const average = calculateAverage.execute('total_amount');

    expect(average).toBe(13.32);
  });

  it('calculates pulocationid average', () => {
    const average = calculateAverage.execute('pulocationid');

    expect(average).toBe(191);
  });
});
