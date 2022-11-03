import { CalculateSum } from './calculateSum.js';

const dataRepositoryMock = () => {
  return {
    data: {
      data: [
        {
          tip_amount: 1,
          total_amount: 6.36,
        },
        {
          tip_amount: 1.66,
          total_amount: 17.3,
        },
        {
          tip_amount: 2,
          total_amount: 16.3,
        },
      ],
    },
  };
};
const calculateSum = new CalculateSum(dataRepositoryMock());

describe('CalculateSum', () => {
  it('calculates total_amount sum', () => {
    const sum = calculateSum.execute('total_amount');

    expect(sum).toBe(39.96);
  });

  it('calculates tip_amount sum', () => {
    const sum = calculateSum.execute('tip_amount');

    expect(sum).toBe(4.66);
  });
});
